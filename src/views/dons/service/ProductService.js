
export class ProductService {


    getSuperAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/alsuperadmin/').then(res => res.json()).then(d => d);
    }
    getAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/aladmin/').then(res => res.json()).then(d => d);
    }
    getAgentsParAdmins() {
        return fetch('https://apivulnerable.herokuapp.com/alagent/').then(res => res.json()).then(d => d);
    }
    getAgents() {
        return fetch('https://apivulnerable.herokuapp.com/allagent/').then(res => res.json()).then(d => d);
    }
    getRecPers() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablegs/').then(res => res.json()).then(d => d.results);
    }
    getVulVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d.results);
    }
    getVulEtu() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d.results);
    }
    getVulPhy() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d.results);
    }
    getVulChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d.results);
    }
    getDonateurs() {
        return fetch('https://apidons.herokuapp.com/listdonateur/').then(res => res.json()).then(d => d);
    }
    getArgent() {
        return fetch('https://apidons.herokuapp.com/listargea/').then(res => res.json()).then(d => d);
    }
    getNature() {
        return fetch('https://apidons.herokuapp.com/listnaturea/').then(res => res.json()).then(d => d);
    }
    getIndividus() {
        return fetch('https://apivulnerable.herokuapp.com/individus/').then(res => res.json()).then(d => d.data);
    }
    getMenages() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablegs/').then(res => res.json()).then(d => d.data);
    }
    getConditionsVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d.data);
    }
    getConditionsPhys() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d.data);
    }
    getChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d.data);
    }
    getNiveauEtude() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d.data);
    }



}
    