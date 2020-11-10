export class Proyecto {
    constructor(
        public tecnologias: string[],
        public nombre: string,
        public nombreCorto: string,
        public anno: string,
        public urlImg: string,
        public url: string,
    ) { }
    public static fromJson(data): any {
        try {
            if (data.tecnologias && data.nombre && data.nombreCorto && data.anno && data.urlImg && data.url) {
                if (!null || !undefined) {
                    return new Proyecto(data.tecnologias, data.nombre, data.nombreCorto, data.anno, data.urlImg, data.url);
                }
            }
            throw (new Error('Argumento no válido: la estructura del argumento no coincide con los campos del modelo'));
        } catch (e) {
            console.log((e as Error).message);
        }
    }
    public static cloneProject(proyecto: Proyecto): Proyecto {
        // tslint:disable-next-line:max-line-length
        const proyectoClonado = new Proyecto(proyecto.tecnologias, proyecto.nombre, proyecto.nombreCorto, proyecto.anno, proyecto.urlImg, proyecto.url);
        return proyectoClonado;
    }
}
