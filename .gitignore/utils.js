const fs = require('fs')

exports.initBot = (index) =>
{
    exports.formatTime = (time) =>
    {
       let days = Math.floor(time / 86400)
        time %= 86400
        let hours = Math.floor(time / 3600)
        time %= 3600
        let minutes = Math.floor(time / 60)
        let seconds = Math.floor(time % 60)

        return days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes et ' + seconds + ' secondes'
    }
}   
