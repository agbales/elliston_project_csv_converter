function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

    function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }

    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }

    var data;
    var ellistonData = { 	totalRecords: 0,
    						playlistID: {}
    					};
    var allTracks = [];
    var authors = '';

    // Array used for ONLY WP listing info:
    var el = [];


    function processData(csv) {
            data = Papa.parse(csv, {
        					header: true,
        					dynamicTyping: true,
        					complete: function(d) {
        						data = d
                    console.log(d)
        					}
                });
    }
