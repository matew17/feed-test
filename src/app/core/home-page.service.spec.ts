import { TestBed } from '@angular/core/testing';

import { HomePageService } from './services/home-page.service';

describe('MenuService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: HomePageService = TestBed.get(HomePageService);
        expect(service).toBeTruthy();
    });
});
