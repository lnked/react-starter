import React from 'react';
import _ from 'lodash';
import WidgetList from '../views/widget-list';
import * as widgetApi from '../../api/widget-api';

const WidgetListContainer = React.createClass({

  getInitialState: function() {
    return {
      widgets: []
    }
  },

  componentDidMount: function() {
    widgetApi.getWidgets().then(widgets => {
      this.setState({widgets: widgets})
    });
  },

  deleteWidget: function(widgetId) {
    widgetApi.deleteWidget(widgetId).then(() => {
      const newWidgets = _.filter(this.state.widgets, widget => widget.id != widgetId);
      this.setState({widgets: newWidgets})
    });
  },

  render: function() {
    return (
      <WidgetList widgets={this.state.widgets} deleteWidget={this.deleteWidget} />
    );
  }

});

export default WidgetListContainer;
