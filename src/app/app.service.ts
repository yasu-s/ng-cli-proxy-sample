import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Memo } from './app.model';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * constructor
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
  }

  /**
   * データ取得
   */
  get(): Observable<Memo[]> {
    return this.http.get<Memo[]>('/api/memos');
  }

  /**
   * データ登録
   * @param memo
   */
  post(memo: string): Observable<number> {
    const data = { memo: memo };
    return this.http.post('api/memos', data, { observe: 'response' }).pipe(
      map(res => res.status)
    );
  }
}
