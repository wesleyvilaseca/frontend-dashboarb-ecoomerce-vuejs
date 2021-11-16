export default {
    Encrypt(dados) {
        var mensx = "";

        var l;

        var i;

        var j = 0;

        var ch;

        ch = process.env.VUE_APP_HASH;
        

        for (i = 0; i < dados.length; i++) {

            j++;

            l = (this.Asc(dados.substr(i, 1)) + (this.Asc(ch.substr(j, 1))));

            if (j == 50) {

                j = 1;

            }

            if (l > 255) {

                l -= 256;

            }

            mensx += (this.Chr(l));

        }

        return mensx;

    },

    Decrypt(dados) {

        var mensx = "";

        var l;

        var i;

        var j = 0;

        var ch;

        ch = process.env.VUE_APP_HASH;

        for (i = 0; i < dados.length; i++) {

            j++;

            l = (this.Asc(dados.substr(i, 1)) - (this.Asc(ch.substr(j, 1))));

            if (j == 50) {

                j = 1;

            }

            if (l < 0) {

                l += 256;

            }

            // eslint-disable-next-line no-undef
            mensx += (this.Chr(l));

        }

        return mensx;

    },

    Asc(String) {
        return String.charCodeAt(0);
    },
    Chr(AsciiNum) {
        return String.fromCharCode(AsciiNum)
    }
}