export class Proyecto {
    constructor(
        public cod: string,
        public tecnologias: string[],
        public nombre: string,
        public anno: string,
        public urlImg: string,
    ) { }
    public static fromJson(data): any {
        try {
            if (data.cod && data.tecnologias && data.nombre && data.anno && data.urlImg) {
                if (!null || !undefined) {
                    return new Proyecto( data.cod, data.tecnologias, data.nombre, data.anno, data.urlImg);
                }
            }
            console.log(data);
            throw (new Error('Argumento no válido: la estructura del argumento no coincide con los campos del modelo'));
        } catch (e) {
            console.log((e as Error).message);
        }
    }
    public static cloneProject(proyecto: Proyecto): Proyecto {
        // tslint:disable-next-line:max-line-length
        const proyectoClonado = new Proyecto(proyecto.cod, proyecto.tecnologias, proyecto.nombre, proyecto.anno, proyecto.urlImg);
        return proyectoClonado;
    }
}
