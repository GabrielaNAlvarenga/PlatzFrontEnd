/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("platz").controller("categoriaController", function ($scope, $http) {

    //Faz um Get no Web Service recebendo uma URL
    $scope.listarTodos = function () {
        $http.get(webService + "/categorias").then(function (response) {
            $scope.categorias = response.data;
        }, function (response) {
            switch (response.status) {
                case 404:
                    console.log("Erro ao Acessar: " + webService + "/categorias");
                    break;
                default :
                    break;
            }
        });
    };

    $scope.cadastrar = function (categoria) {
        $http.post(webService + "/categoria", categoria).then(function (response) {

            console.log("Categoria Cadastrada com Sucesso");

            //Atualiza a lista
            $scope.listarTodos();

        }, function (response) {

            console.log("Erro ao cadastrar");
            console.log(response);

        });
    };
    $scope.listarTodos();
});



