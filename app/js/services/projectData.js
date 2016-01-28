asbest.factory('projectData', function(){
    var projects = [
    {
      "name": "Demo Project",
      "address": "Visiokatu 3",
      "city": "Tampere",
      "date": "13/01/16",
      "floorplans":[{
          "id": 1,
          "name": 1,
          "image": "demo-kerros1.png"
        },
        {
          "id": 2,
          "name": 2,
          "image": "demo-floorplan2.jpg"
      }],
    },
    {
      "name": "Renew hall",
      "address": "Yliopistokatu 2",
      "city": "Tampere",
      "date": "12/01/16",
      "floorplans":[{
          "id": 1,
          "image": "demo-kerros1.png"
        },
        {
          "id": 2,
          "image": "demo-floorplan2.jpg"
      }],
    }];

    return{
      getAllProjects: function(){
        return projects;
      },

      getProjectByName: function(name){
        for(var i = 0; i < projects.length; i++){
          if(projects[i].name === name){
            return projects[i];
          }
        }
      },
    };
});