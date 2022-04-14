
document.querySelector('form').addEventListener('submit', function(event) {

    event.preventDefault();

    onButtonClick();
});



function onButtonClick() {

    let options = {
        filters: [
          {namePrefix: 'UWSR'}
        ],
        optionalServices: ['battery_service']
      }
      
      navigator.bluetooth.requestDevice(options).then(function(device) {
        console.log('Name: ' + device.name);
        // Do something with the device.
      })
      .catch(function(error) {
        console.log("Something went wrong. " + error);
      });

}
