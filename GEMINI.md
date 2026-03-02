# Project
- Anatomy Explorer Web App
- Student searches for a structure, the web app shows multiple views in 3D of that structure in a bento box layout 
- feature to also be able to compare structures side-by-side
- later feature: be able to resize the bento box and add to the UI. 
  - UI can adapt based on what's added. LATER FEATURE NOT NOW


# Technical stack:
- Language/Runtime: React (Vite 8) for frontend, Go (Echo) for backend
- 3D enginge: React Three Fiber + Drei
- Styling: Tailwind CSS (this can be useful for the 32 column bento box in the results section). The version is V4.
- Database: PostgreSQL (Metadata + JSONB for layout preferences)
- Communication: REST (Echo) (may contain different query parameters for search results because the different views can be customizable in the results page)

# Implementation logic:
- A. The "Bento" UI Logic
View-Porting: Use the R3F <View /> and <View.Port /> pattern. Render one global Scene but multiple independent Viewports.

- Stepped Resizing: Implement "snap-to-grid" logic. Any resizing of bento boxes must snap to 4 or 8-unit increments within the 32-column grid.

- Auto-Reflow: Use grid-auto-flow: dense or react-grid-layout to ensure the dashboard remains centered and gaps are filled when a box is resized.

# The Camera & Control System 

- Independent Controls: Every <View /> must have its own <OrbitControls /> and <PerspectiveCamera />.

- State Sync: Implement a SyncMode toggle. When active, a Matrix4 or Quaternion from the active camera must be broadcast to all other active cameras in the bento grid.

# The backend
- Fuzzy Search: Implement Levenshtein-based search for anatomical structures.

- Inheritance Hierarchy: The system must resolve view configurations in this order:
  - User-specific structure config (e.g., "My Femur View").

  - User-specific category config (e.g., "My Long Bone Layout").

  - Global System Default.
