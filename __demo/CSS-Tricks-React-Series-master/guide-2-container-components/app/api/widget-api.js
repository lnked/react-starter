import axios from 'axios';

/**
 * Get widgets
 */

export function getWidgets() {
  return axios.get('http://localhost:3001/widgets')
    .then(response => response.data);
}

/**
 * Delete a widget
 */

export function deleteWidget(widgetId) {
  return axios.delete('http://localhost:3001/widgets/' + widgetId);
}
