<?php
//  on créée la premiere session pour lancer
    session_start();
    if(isset($_GET['action'])){
        if($_GET['action'] =='deco'){
        session_destroy();
        unset($_SESSION['nom']);
        }
    }
    if(isset($_POST['subbtn']) && isset($_POST['cmdp'])){

        $bdd = new PDO('mysql:host=localhost;dbname=aquaocourant','root','');
       // requete
        $req ="SELECT `login` FROM `user` WHERE `id=1` = '".$_POST['login']."' AND `passw` = '".$_POST['cmdp']."'";
        $res = $bdd->query($req);
        $tbl = $res->fetchAll(); // le serveur de fichier qui fait le traitement (serveur client)
        if(count($tbl)> 0) {
            $_SESSION['nom'] = $tbl[0]['nom'];
        } else {
            echo "Une erreur est survenu, merci de recommencer";
        }
    }
/* -- */
    if(!isset($_GET['page'])) $_GET['page']="accueil"; // si la page existe pas on envoie au page par defaut
?>