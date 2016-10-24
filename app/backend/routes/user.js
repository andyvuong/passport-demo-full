/**
 * User API Endpoint
 */

module.exports = function(router, passport) {

    /**
     * Defines an api route /<route>
     */
    var userRoute = router.route('/user');

    /**
     * Restful API: HTTP Request handlers
     */
    userRoute
        .get(function(req, res) {
            
        })
        .post(function(req, res) { 

        })
        .put(function(req, res) { 

        })
        .delete(function(req, res) { 

        })
        .options(function(req, res) {
            res.writeHead(200);
            res.end();
        });
        
  return router;
}