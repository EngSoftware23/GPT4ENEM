import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    backendUrl: string = environment.BACKEND_API_REST_URL

    constructor(private http: HttpClient) { }

    getHistory(): Observable<any> {
        return this.http.get(this.backendUrl + '/historico');
    }

    postServices(data: any): Observable<any> {
        return this.http.post(this.backendUrl + '/servicos', data);
    }

    postTranscription(videoId: string, uid: string): Observable<any> {
        const requestData = { videoId, uid };
        return this.http.post(this.backendUrl + '/transcricao', requestData);
    }

    postSummary(videoId: string, uid: string): Observable<any> {
        const requestData = { videoId, uid };
        console.log(requestData);
        console.log(this.backendUrl + '/resumo', requestData)
        return this.http.post(this.backendUrl + '/resumo', requestData);
    }

    postReview(videoId: string, uid: string): Observable<any> {
        const requestData = { videoId, uid };
        return this.http.post(this.backendUrl + '/revisao', requestData);
    }
}
