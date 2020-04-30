 $(document).ready(function() {
	window.vConsole = new window.VConsole({
    defaultPlugins: ['system',
      'network',
      'element',
      'storage'],
	  
    maxLogNumber: 1000,
    // disableLogScrolling: true,
    onReady: function() {
      console.log('vConsole is ready.');
    },
    onClearLog: function() {
      console.log('on clearLog');
    }
  });
  });
