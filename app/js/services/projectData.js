asbest.factory('projectData', function(){
    var projects = [
    {
      "name": "Asnto Oy Demokiinteistö",
      "id": "1",
      "address": "Visiokatu 3",
      "city": "Tampere",
      "date": "13/01/16",
      "floorplans":[{
          "id": "1",
          "name": "Kerros-1",
          "imagePath": "demo-kerros1.png"
        },
        {
          "id": "2",
          "name": "Kerros-2",
          "imagePath": "demo-floorplan2.jpg"
      }],
    },
    {
      "name": "Demo Oy",
      "id": "2",
      "address": "Yliopistokatu 2",
      "city": "Tampere",
      "date": "12/01/16",
      "floorplans":[{
          "id": "1",
          "name": "Kerros-1",
          "imagePath": "demo-kerros1.png"
        },
        {
          "id": "2",
          "name": "Ullakko",
          "imagePath": "demo-ullakko.png"
      }],
    }];

    return{
      getAllProjects: function(){
        return projects;
      },

      getProjectById: function(id){
        for(var i = 0; i < projects.length; i++){
          if(projects[i].id == id){
            return projects[i];
          }
        }
      },
      getProjectFloorPlan: function(projectId, floorplanId){
        var project = this.getProjectById(projectId);
        for(var i = 0; i < project.floorplans.length; i++){
          if(project.floorplans[i].id == floorplanId){
            return project.floorplans[i];
          }
        }
      }
    };
});