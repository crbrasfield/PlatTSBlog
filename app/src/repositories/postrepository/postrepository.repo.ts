import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostrequestsService from '../../services/postrequests/postrequests.svc';

export default class PostrepositoryRepository extends BaseRepository {


    constructor(private postSvc: PostrequestsService) {
        super();
    };

    getPosts() {
            return this.postSvc.getPosts();
                
    }
    
    newPost(data: any) {
        return this.postSvc.newPost(data);
    }
    
    getSpecificPost(data: string) {
        return this.postSvc.getSpecificPost(data);
    }
    


}

register.injectable('postrepository-repo', PostrepositoryRepository, [PostrequestsService]);
