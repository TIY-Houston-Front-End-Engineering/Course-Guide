
var Place = function(){
    this.fetchData = function(loc){
        var self = this
        return $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + loc
        }).done(function(resp){self.latLong = resp.results[0].geometry.location})
    }
    this.getCoords = function(){
        return this.latLong
    }
}

var jamaica = new Place()

jamaica.fetchData('jamaica').done(function(){console.log(jamaica.getCoords())})
