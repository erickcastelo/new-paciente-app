import {Component, Input} from '@angular/core';
import {NavLifecycles} from "../../helpers/ionic/nav/nav-lifecycles";
import {NavController} from "ionic-angular";
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuPage implements NavLifecycles{

    @Input() myContent: any;
    public user: any;

    constructor(public navCtrl: NavController, private camera: Camera) {
        const response = JSON.parse(localStorage.getItem('user'));

        if (response !== null && response !== undefined) {
            this.user = response.user;
            this.user.foto = this.user.foto !== null ? this.user.foto : '../assets/img/photo_default.png';
        }
    }

    ionViewDidLoad() {

    }

    public openPage(router: string): void {
        this.navCtrl.push(router);
    }

    public openCamera(): void {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            alert(err);
        });
        // this.camera.getPicture({
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     saveToPhotoAlbum: true,
        //     correctOrientation: true,
        // })
        //     .then(photo => {
        //         alert('funcionou');
        //     })
    }
}
