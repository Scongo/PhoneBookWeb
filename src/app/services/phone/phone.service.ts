import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Phone} from '../../models/Phone';

@Injectable()
export class PhoneService {

  // tslint:disable-next-line:variable-name
  private _phone: Observable<Array<Phone>>;
  private contactDatail: Observable<Phone>;
  private readonly phoneBaseUrl: string;

  constructor(private http: HttpClient) {
    this.phoneBaseUrl = environment.apiBase.concat('/api/phonebook/');
  }

  public loadContact(): Observable<Array<Phone>> {
    const apiURL = `${this.phoneBaseUrl}load`;
    return this._phone = this.http.post<Phone[]>(apiURL, null).pipe();
  }

  public getContactDetails(name: string): Observable<Phone> {
    return this.http.post<Phone>(environment.apiBase.concat('/api/phonebook/search?name=').concat(name), null);
  }

}
