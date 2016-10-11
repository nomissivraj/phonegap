angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.rATENEW'
      2) Using $state.go programatically:
        $state.go('tabsController.rATENEW');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page2
      /page1/tab1/page2
  */
  .state('tabsController.rATENEW', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/rATENEW.html',
        controller: 'rATENEWCtrl'
      },
      'tab1': {
        templateUrl: 'templates/rATENEW.html',
        controller: 'rATENEWCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.halo5Guardians'
      2) Using $state.go programatically:
        $state.go('tabsController.halo5Guardians');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page6
      /page1/tab1/page6
  */
  .state('tabsController.halo5Guardians', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/halo5Guardians.html',
        controller: 'halo5GuardiansCtrl'
      },
      'tab1': {
        templateUrl: 'templates/halo5Guardians.html',
        controller: 'halo5GuardiansCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.fPSRATE'
      2) Using $state.go programatically:
        $state.go('tabsController.fPSRATE');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/home
      /page1/tab1/home
  */
  .state('tabsController.fPSRATE', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/fPSRATE.html',
        controller: 'fPSRATECtrl'
      },
      'tab1': {
        templateUrl: 'templates/fPSRATE.html',
        controller: 'fPSRATECtrl'
      }
    }
  })

  .state('tabsController.mUSTPLAYWISHLIST', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/mUSTPLAYWISHLIST.html',
        controller: 'mUSTPLAYWISHLISTCtrl'
      }
    }
  })

  .state('cOMPARE', {
    url: '/page7',
    templateUrl: 'templates/cOMPARE.html',
    controller: 'cOMPARECtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/tab2/home')

  

});