angular.module('folio', [

])
  .controller('folio_controller', function ($scope) {
      $scope.categories = [
          {"id": 0, "name": "Web"},
          {"id": 1, "name": "Design"},
          {"id": 2, "name": "Print"},
          {"id": 3, "name": "Video"}
      ];

  $scope.items = [
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Web'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    },
    {
        'image': 'images/redgem.jpg',
        'thumb': 'images/t_redgem.jpg',
        'name': 'Test',
        'description': 'Test2',
        'category': 'Design'
    }
  ];
    
    $scope.currentCategory = null;

    function isCurrentCategory(category) {
          return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    function setCurrentCategory(category) {
          $scope.currentCategory = category;
    }

    $scope.isCurrentCategory = isCurrentCategory;
    $scope.setCurrentCategory = setCurrentCategory;
  })
;