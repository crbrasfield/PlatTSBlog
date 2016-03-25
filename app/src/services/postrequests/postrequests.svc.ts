import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostrequestsService extends BaseService {

    
    
    getPosts(): async.IAjaxThenable<Array<models.IPost>> {
        return this.http.json<Array<models.IPost>>({
            method: 'GET',
            url: this.host + '/posts'
        }).then((success) => {
            console.log(success);
            return success.response;
        });
    }

    newPost(postdata: models.IPost): async.IAjaxThenable<Array<models.IPost>> {
        return this.http.json<Array<models.IPost>>({
            method: 'POST',
            url: this.host + '/posts',
            data: postdata
        }).then((success) => {
            console.log(success);
            return success.response;
        });
    }
    
    getSpecificPost(params: any): async.IAjaxThenable<Array<models.IPost>> {
        return this.http.json<Array<any>>({
            method: 'GET',
            url: this.host + '/posts/' + params
        }).then((success) => {
            return success.response;
        });
    }
    
    

}

register.injectable('postrequests-svc', PostrequestsService);
