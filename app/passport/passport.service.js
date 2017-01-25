/**
 * Created by william on 17/1/19.
 */
module.exports = ['CacheFactory',
function (CacheFactory)
{
    var cacheKey = 'passport';
    var passportCache = CacheFactory.get(cacheKey);

    /**
     *
     * @param state
     * @description redirect to the $state after finishing signin or signup
     */
    this.setRedirectState = function (state)
    {

    };
    
    this.setRedirectUrl = function () {
        
    };
    
    this.getRedirect = function () {
        
    }


}];
