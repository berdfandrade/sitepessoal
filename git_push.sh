#!/bin/bash

# Adiciona todos os arquivos modificados e novos
git add .

# Realiza o commit com uma mensagem fornecida ou uma mensagem padrão
if [ -n "$1" ]; then
  git commit -m "$1"
else
  git commit -m "--"
fi

# Desativa o aviso sobre arquivos no .gitignore
git config advice.addIgnoredFile false

# Realiza o push para o repositório remoto
git push