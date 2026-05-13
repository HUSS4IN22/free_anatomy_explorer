import React, { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { View, OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LinkIcon, Link2OffIcon, MoveIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { fetchLayout } from '@/lib/api'
import { Badge } from '@/components/ui/badge'

// Import basic styles for react-grid-layout
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

interface BentoBoxProps {
  className?: string
  children?: React.ReactNode
  title: string
  syncEnabled?: boolean
  onCameraChange?: (camera: any) => void
  syncedCamera?: any
  id: string
}

const BentoBox = React.forwardRef<HTMLDivElement, BentoBoxProps>(
  ({ className, children, title, syncEnabled, onCameraChange, syncedCamera, id, ...props }, ref) => {
    const viewRef = useRef<HTMLDivElement>(null!)
    const controlsRef = useRef<any>(null!)

    useFrame(() => {
      if (syncEnabled && syncedCamera && controlsRef.current) {
        const { position, quaternion } = syncedCamera
        controlsRef.current.object.position.lerp(position, 0.1)
        controlsRef.current.object.quaternion.slerp(quaternion, 0.1)
        controlsRef.current.update()
      }
    })

    return (
      <div 
        ref={(node) => {
          // @ts-ignore
          viewRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          "relative rounded-3xl bg-white/40 border border-white/20 shadow-sm overflow-hidden group transition-colors hover:bg-white/60",
          className
        )}
        {...props}
      >
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <div className="drag-handle cursor-grab active:cursor-grabbing p-1 hover:bg-black/5 rounded-md transition-colors">
            <MoveIcon size={14} className="text-muted-foreground" />
          </div>
          <h3 className="font-patrick text-sm font-semibold text-muted-foreground uppercase tracking-wider select-none">{title}</h3>
        </div>
        
        <View track={viewRef} className="h-full w-full">
          <Suspense fallback={null}>
            <Stage intensity={0.5} environment="city" adjustCamera={false}>
              {children}
            </Stage>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <OrbitControls 
              ref={controlsRef}
              makeDefault 
              onChange={(e) => {
                if (!syncEnabled && onCameraChange) {
                  onCameraChange(e?.target.object)
                }
              }}
            />
          </Suspense>
        </View>
      </div>
    )
  }
)

export default function BentoGrid({ structureId }: { structureId: string }) {
  const containerRef = useRef<HTMLDivElement>(null!)
  const [syncMode, setSyncMode] = useState(false)
  const [activeCameraState, setActiveCameraState] = useState<any>(null)

  const { data: layoutData, isLoading } = useQuery({
    queryKey: ['layout', structureId],
    queryFn: () => fetchLayout(structureId),
  })

  const [layouts, setLayouts] = useState<any>({
    lg: []
  })

  useEffect(() => {
    if (layoutData) {
      setLayouts({
        lg: layoutData.layout
      })
    }
  }, [layoutData])

  const handleCameraChange = (camera: any) => {
    if (!syncMode) {
      setActiveCameraState({
        position: camera.position.clone(),
        quaternion: camera.quaternion.clone(),
      })
    }
  }

  const onLayoutChange = (currentLayout: any, allLayouts: any) => {
    setLayouts(allLayouts)
  }

  const onResize = (layout: any, oldItem: any, newItem: any) => {
    // Implement snap-to-grid: snap width to 4-unit increments
    newItem.w = Math.round(newItem.w / 4) * 4
    if (newItem.w < 4) newItem.w = 4
  }

  if (isLoading) return <div className="w-full h-[700px] flex items-center justify-center font-patrick text-2xl">Loading Layout...</div>

  return (
    <div className="w-full relative flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <Button 
            variant={syncMode ? "default" : "outline"} 
            size="sm"
            onClick={() => setSyncMode(!syncMode)}
            className="font-patrick gap-2 rounded-xl"
          >
            {syncMode ? <LinkIcon size={16} /> : <Link2OffIcon size={16} />}
            {syncMode ? "Cameras Synced" : "Sync Cameras"}
          </Button>

          {layoutData && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-patrick text-muted-foreground uppercase">Layout Source:</span>
              <Badge variant="secondary" className="font-patrick rounded-lg uppercase tracking-tight text-[10px]">
                {layoutData.source.replace('-', ' ')}
              </Badge>
            </div>
          )}
        </div>
      </div>

      <div ref={containerRef} className="w-full bg-slate-100/30 rounded-4xl min-h-[700px] p-2 overflow-hidden">
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 32, md: 32, sm: 12, xs: 12, xxs: 12 }}
          rowHeight={30}
          draggableHandle=".drag-handle"
          onLayoutChange={onLayoutChange}
          onResize={onResize}
          margin={[16, 16]}
        >
          <div key="anterior">
            <BentoBox 
              id="anterior"
              title="Anterior View"
              syncEnabled={syncMode}
              syncedCamera={activeCameraState}
              onCameraChange={handleCameraChange}
            >
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
              </mesh>
            </BentoBox>
          </div>
          <div key="lateral">
            <BentoBox 
              id="lateral"
              title="Lateral View"
              syncEnabled={syncMode}
              syncedCamera={activeCameraState}
              onCameraChange={handleCameraChange}
            >
              <mesh rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="royalblue" />
              </mesh>
            </BentoBox>
          </div>
          <div key="detail">
            <BentoBox 
              id="detail"
              title="Detail / Cross-Section"
              syncEnabled={syncMode}
              syncedCamera={activeCameraState}
              onCameraChange={handleCameraChange}
            >
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="crimson" />
              </mesh>
            </BentoBox>
          </div>
        </ResponsiveGridLayout>
      </div>

      {/* The Global Canvas */}
      <Canvas
        eventSource={containerRef}
        className="pointer-events-none absolute inset-0 !fixed"
        style={{ zIndex: 40 }}
      >
        <View.Port />
      </Canvas>
    </div>
  )
}
