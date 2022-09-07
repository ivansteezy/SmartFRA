import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpHandlerService } from './http-handler.service';

describe('HttpHandlerService', () => {
  let service: HttpHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should make a GET request', waitForAsync(() => {
     service.Get('https://httpbin.org/anything', true).toPromise().then((res: any) => {
      console.log(res.method);
      expect(res.method).toBe('GET');
    }).catch((err) => {
      console.log('Error trying to make a GET request', err);
    });
  }));
});
