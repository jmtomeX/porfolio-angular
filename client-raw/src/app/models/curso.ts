export class Curso {
    constructor(
        public rama: string,
        public estudios: string,
        public nombre: string,
        public anno: string,
        public horas: number

    ) { }
    public static fromJson(data): any {
        try {
            if (data.rama && data.estudios && data.nombre && data.anno && data.horas) {
                if (!null || !undefined) {
                    return new Curso(data.rama, data.estudios, data.nombre, data.anno, data.horas);
                }
            }
            throw (new Error('Argumento no válido: la estructura del argumento no coincide con los campos del modelo'));
        } catch (e) {
            console.log((e as Error).message);
        }
    }
}
