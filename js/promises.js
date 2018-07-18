(function () {

    // function  wait(number) {
    //     return new Promise((resolve, reject) =>
    //     setTimeout(() => {
    //         if (typeof number === 'number') {
    //             resolve(console.log(`Waited for ${number} milliseconds`))
    //         }
    //         else {
    //             reject("Error!")
    //         }
    //     }, number)
    //     )
    // }
    // wait(4000).then(() => console.log('You\'ll see this after' + number + 'milliseconds second'));


    function lastPush(user) {
        console.log(fetch('https://api.github.com/users/' + user + '/events?access_token=')   // Put API token after 'token='
            .then(response => response.json())
            .then(data => console.log(data[0].created_at))
            .catch("Error"))
    }
    lastPush('zaneagley');


   // function btnProfile(e) {
   //     e.preventDefault();
   //     console.log(fetch('../data/profiles.json'))
   // }
   //
   //
   // document.getElementById('btnSubmit').addEventListener('click', btnProfile)

})();