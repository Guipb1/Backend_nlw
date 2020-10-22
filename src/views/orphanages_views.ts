// retornando da maneira que precisa ser exibido no front
// A VIEW determina o que vai ser mostrado ou nao
import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default {
    render(orphanage:Orphanage) {
        return {
            id:orphanage.id,
            name:orphanage.name,
            latitude:orphanage.latitude,
            longitude:orphanage.longitude,
            instructions:orphanage.instructions,
            about:orphanage.about,
            opening_hours:orphanage.opening_hours,
            open_on_weekends:orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        };
    },

    // percorrendo todos orfanatos e pra cada um to chamando o metodo  
    renderMany(orphanages:Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage));
    }
};