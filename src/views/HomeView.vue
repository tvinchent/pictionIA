<template>
    <div id="topZone">
        <img src="../assets/logo.svg" id="logo" alt="logo pictionAi">
        <div class="row actionContainer">
            <div class="col-lg-6 col-sm-12">
                <input type="text" class="form-control inputName input" placeholder="Entrez votre pseudo" ref="focusName" maxlength="12" id="nameUser">
            </div>
            <div class="col-lg-6 col-sm-12">
                <RouterLink to="/question"><button type="button" class="btn btn-info btn-lg" id="jouer">JOUER</button></RouterLink>
            </div>
        </div>

        <div id="explication">
            <div class="row">
                <div class="col-lg-5 col-sm-12" id="explicationTexte">
                    <div id="explicationTexteContent">
                        <h1>Le pictionary version IA.</h1>
                        <h2>Une IA parfois ça fait nimp'.</h2>
                        <h3>Tente de découvrir le mot derrière l'image qu'elle génère</h3>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12">
                    <img src="../assets/interface/illu-hp-detoure.webp" id="illustrationHome" alt="explication pictionAi">
                </div>
            </div>
        </div>
        <h4>Déjà plus de 10 joueurs satisfaits</h4>
        <div id="stars">
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-solid fa-star" />
        </div>
    </div>
    <br>
</template>

<style scoped>

#topZone{
    max-width: 740px;
    margin: auto;
}
.actionContainer{
    padding: 3em 0;
}

.inputName{
    /* width: 70%; */
    float: right;
    line-height: 2.1;
}
#explication{
    padding: 1em;
    margin: 1em 0 2em 0;
    border-radius: 10px;
    background: rgb(221,148,164);
    background: linear-gradient(315deg, rgba(221,148,164,1) 0%, rgba(255,192,203,1) 100%);
}
h1{
    font-weight: 700;
    padding-bottom: 1em;
    /* line-height: 1; */
}
#explicationTexte{
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 0.875em;
    font-weight: 400;
    line-height: 250.4%; */
}
h2{
    /* font-size: 1.375em; */
    font-weight: 700;
}
h2, h3{
    font-size: 1em;
}
#illustrationHome{
    width: 100%;
}
h4{
    color: #04F2FF;
    text-transform:uppercase;
    font-size: .85em;
    margin-top: 1em;
    font-weight: bolder;
}
#stars{
    width: 6em;
    background-color: #04F2FF;
    margin: auto;
    border-radius: 2em;
}
@media screen and (max-width: 540px) {
    #topZone{
        width: 100%;
        margin: auto;
    }
    h1{
        font-size: 1em;
    }
    .actionContainer{
        padding: 1em 0;
    }
    .inputName{
        width: 100%;
    }
    #jouer{
        margin-top: 1em;
        width: 100%;
    }
}

</style>

<script>
export default{
    mounted() {
        this.$nextTick(() => this.$refs.focusName.focus())
    }
}

</script>
    