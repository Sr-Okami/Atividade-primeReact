import React from "react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primereact/resources/primereact.min.css';
import "primeflex/primeflex.css"
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const App = () => {
    return (
        <PrimeReactProvider>
            <div class="align-items-center flex-column xl:shadow-8 sm:shadow-8 bg-white border-round-xl w-17rem" style={{ height: "300px", margin: "auto", marginTop: "190px", }}>
                <div class="flex flex-column align-items-center justify-content-center">
                        <h1 class="justify-content-center uppercase mb-4 mt-5" >Login</h1>
                        <form class="">
                            <div class="mb-2 field">
                                <label class="" htmlFor="email">Email:</label>
                                <InputText
                                class=" w-full h-2rem border-round-lg border-solid outline-none"
                                id="email"
                                type="text"
                                placeholder="@email.com"
                                style={{ borderColor:"green",
                                    borderWidth:"3px",
                                    borderStyle:"solid",
                                }}
                                />
                            </div>
                            <div class="mb-4 field">
                                <label class="" htmlFor="senha">Senha:</label>
                                <InputText
                                type="password"
                                class="w-full h-2rem border-round-lg border-solid outline-none"
                                id="senha"
                                placeholder="Sua senha..."
                                required
                                style={{ borderColor:"green",
                                    borderWidth:"3px",
                                    borderStyle:"solid",
                                }}
                                />
                            </div>
                            <div class="flex justify-content-center mt-3">
                            <Button
                            label="Entrar" severity="success"
                            className="h-2rem w-4rem"
                            Raised />
                            </div>
                    </form>
                    <div class="mt-1">
                        <span class="text-xs" style={{color:"#a1a1a1"}}>Dev. Matheus</span>
                    </div>
                </div>
                </div>
        </PrimeReactProvider>
    );
};

export default App;