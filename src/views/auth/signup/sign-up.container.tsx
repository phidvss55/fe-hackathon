import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps;

const SignUpContainer: React.FunctionComponent<Props> = () => {
  return (
    <div className="bg-white">
      <div className="max-md:flex-col max-md:items-stretch max-md:gap-0 flex gap-5 bg-primary-green">
        <div className="max-md:w-full max-md:ml-0 flex w-6/12 flex-col items-stretch">
          <div className="max-md:max-w-full max-md:px-5 flex w-full grow flex-col items-stretch rounded-none py-12 pl-12 pr-16">
            <div className="text-zinc-900 max-md:max-w-full max-md:mt-10 mt-28 text-4xl font-semibold">
              Faltam poucos passos para
              <br />
              se tornar um Aluno!
            </div>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d43b1e2a4d84d84a9650d3be7c340d4c15d7e0a2492e4167da0bebed5b8ce3?"
              className="max-md:my-10 mt-28 mb-12 aspect-[1.01] w-[583px] max-w-full self-end overflow-hidden object-contain object-center"
            />
          </div>
        </div>

        <div className="max-md:w-full max-md:ml-0 ml-5 flex w-6/12 flex-col items-stretch">
          <div className="max-md:max-w-full max-md:px-5 flex w-full grow flex-col items-center bg-white px-20 py-12">
            <div className="max-md:max-w-full max-md:flex-wrap max-md:mt-10 mt-16 flex items-stretch gap-2">
              <img
                alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3c520b381c85345ed954cad3dc57058787a8651ba9920e0ba73212ecf9b0d31?"
                className="aspect-square w-[46px] max-w-full shrink-0 overflow-hidden object-contain object-center"
              />
              <div className="text-zinc-900 max-md:max-w-full my-auto shrink grow basis-auto self-center text-4xl font-semibold">
                Olá Novo Aluno!
              </div>
            </div>
            <div className="max-md:max-w-full mt-5 max-w-[519px] text-base text-gray-800">
              Bem vindo a nossa plataforma! Por favor, preencha os campos a
              seguir ou entre com sua conta google, para se tornar o nosso mais
              novo aluno
            </div>
            <div className="text-neutral-600 max-md:pr-5 mt-8 w-[528px] max-w-full items-start justify-center whitespace-nowrap rounded-lg border border-solid border-gray-400 bg-white py-5 pl-4 pr-16 text-base">
              Nome Completo
            </div>
            <div className="text-neutral-600 max-md:pr-5 mt-4 w-[528px] max-w-full items-start justify-center whitespace-nowrap rounded-lg border border-solid border-gray-400 bg-white py-5 pl-4 pr-16 text-base">
              Endereço de E-mail
            </div>
            <div className="text-neutral-600 max-md:pr-5 mt-4 w-[528px] max-w-full items-start justify-center whitespace-nowrap rounded-lg border border-solid border-gray-400 bg-white py-6 pl-4 pr-16 text-base">
              Nome de Usuário
            </div>
            <div className="text-neutral-600 max-md:pr-5 mt-4 w-[528px] max-w-full items-start justify-center whitespace-nowrap rounded-lg border border-solid border-gray-400 bg-white py-6 pl-4 pr-16 text-base">
              Senha
            </div>
            <div className="bg-emerald-500 max-md:px-5 mt-6 w-[528px] max-w-full items-center justify-center whitespace-nowrap rounded-lg px-16 py-5 text-center text-lg font-medium text-white">
              Registrar-se
            </div>
            <div className="max-md:flex-wrap max-md:justify-center mt-10 flex w-[528px] max-w-full items-stretch justify-between gap-5">
              <div className="my-auto flex h-px w-[220px] shrink-0 flex-col self-center bg-gray-400" />
              <div className="text-neutral-600 text-base">OU</div>
              <div className="my-auto flex h-px w-[220px] shrink-0 flex-col self-center bg-gray-400" />
            </div>
            <div className="max-md:mb-10 max-md:px-5 mt-10 mb-40 flex w-[528px] max-w-full flex-col items-center justify-center rounded-lg border border-solid border-gray-400 px-16 py-3.5">
              <div className="flex items-stretch gap-4">
                <img
                  alt=""
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d72b01566688c100cbd9091f806fbd058405382c9f930beb283574020276bbc3?"
                  className="aspect-[0.97] w-8 max-w-full shrink-0 overflow-hidden object-contain object-center"
                />
                <div className="my-auto grow self-center whitespace-nowrap text-lg font-medium text-gray-800">
                  Registrar-se com o Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
