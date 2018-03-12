import { Component } from '@angular/core';
import { LoginService } from '../authorize/service/login.service';
import { Router } from '@angular/router';
declare var $: any;



@Component({
    selector: 'main',
    templateUrl: './main.component.html',
})
export class MainComponent {
    title = 'welcome';

    constructor(private router: Router, private loginService: LoginService) {

    }


    ngOnInit() {
        this.loginService.getAuthorize().catch(() => {
            this.router.navigate(['login']);
        })
    }

    ngAfterViewInit() {
        //lazy load// sau khi login vào thì load đc
        $.getScript("assets/management/plugins/jquery/jquery.min.js", function () {
            $.getScript("assets/management/js/admin.js", function () {
                $.getScript("assets/management/js/pages/index.js", function () {
                    $.getScript("assets/management/js/demo.js", function () {
                        $.getScript("assets/management/js/pages/forms/basic-form-elements.js", function () {
                        });
                    });
                });
            });
        });
    }

}