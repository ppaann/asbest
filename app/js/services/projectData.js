asbest.factory('projectData', function(){
    var projects = [
    {
      "name": "Demo Project",
      "address": "Visiokatu 3",
      "city": "Tampere",
      "date": "13/01/16",
      "floorplans":[{
          "id": 1,
          "name": "floorplan1",
          "imagePath": "demo-kerros1.png"
        },
        {
          "id": 2,
          "name": "floorplan2",
          "imagePath": "demo-floorplan2.jpg"
      }],
    },
    {
      "name": "Renew hall",
      "address": "Yliopistokatu 2",
      "city": "Tampere",
      "date": "12/01/16",
      "floorplans":[{
          "id": 1,
          "imagePath": "demo-kerros1.png"
        },
        {
          "id": 2,
          "imagePath": "demo-floorplan2.jpg"
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
      getProjectFloorPlan: function(projectName, floorplanId){
        var project = this.getProjectByName(projectName);
        for(var i = 0; i < project.floorplans.length; i++){
          if(project.floorplans[i].id == floorplanId){
            return project.floorplans[i];
          }
        }
      }
    };
});