const HISTORY_KEY = "anatomy_search_history";
const MAX_HISTORY = 6;

export function saveToHistory(id: string) {
  try {
    const history = getHistory();
    // Remove if already exists to move to top
    const newHistory = [id, ...history.filter((item) => item !== id)];
    // Limit to max items
    const limitedHistory = newHistory.slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(limitedHistory));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('history-updated'));
  } catch (e) {
    console.error("Failed to save to history", e);
  }
}

export function getHistory(): string[] {
  try {
    const history = localStorage.getItem(HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (e) {
    return [];
  }
}
