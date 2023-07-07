


function gerarSenha(tamanho) {
    if (tamanho < 6) {
      return "Não é possível gerar uma senha com menos de 6 caracteres.";
    } else if (tamanho > 35) {
      return "Não é possível gerar uma senha com mais de 35 caracteres.";
    } else {
      var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
      var senha = "";
      for (var i = 0; i < tamanho; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
      }
      return senha;
    }
  }

export default gerarSenha