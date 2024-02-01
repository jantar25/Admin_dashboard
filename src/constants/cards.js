import { ReactComponent as ClientIcon } from "../assets/icons/clients.svg";
import { ReactComponent as activeIcon } from "../assets/icons/time.svg";
import { ReactComponent as MarchandsIcon } from "../assets/icons/marchants.svg";
import { ReactComponent as AdminsIcon } from "../assets/icons/admins.svg";

export const cardItems = [
  {
    id: 1,
    title: "Total Clients",
    number: 513,
  },
  {
    id: 2,
    title: "Clients Actives",
    number: 5500,
  },
  {
    id: 3,
    title: "Total Marchands",
    amount: 235,
    lastIncome: 210,
  },
  {
    id: 4,
    title: "Marchands Actives",
    number: 235,
  },
];

export const paymentDashboardCardItems = [
  {
    id: 1,
    title: "Paiement Total",
    amount: 51300,
    number: 300,
    description: "Depuis le debut",
  },
  {
    id: 2,
    title: "Paiement Mensuel",
    amount: 5500,
    number: 13,
    description: "Pendant ce mois ci",  
  },
  {
    id: 3,
    title: "Paiement Mensuel",
    amount: 2350,
    number: 21,
    description: "Pendant le mois precedant",
  },
  {
    id: 4,
    title: "Paiement Annuel",
    amount: 23500,
    number: 200,
    description: "Pendant l'annee en cours",
  },
];

export const liquidationDashboardCardItems = [
  {
    id: 1,
    title: "Liquidation Total",
    amount: 5200,
    number: 100,
    description: "Depuis le debut",
  },
  {
    id: 2,
    title: "Liquidation Mensuel",
    amount: 3500,
    number: 7,
    description: "Pendant ce mois ci",  
  },
  {
    id: 3,
    title: "Liquidation Mensuel",
    amount: 2500,
    number: 15,
    description: "Pendant le mois precedant",
  },
  {
    id: 4,
    title: "Paiement Annuel",
    amount: 21000,
    number: 130,
    description: "Pendant l'annee en cours",
  },
];

export const operateurDashboardCardItems = [
  {
    id: 1,
    title: "AIRTEL",
    amount: 52000,
    number: 130,
  },
  {
    id: 2,
    title: "MOOVE",
    amount: 35000,
    number: 70,
  }
];

export const cardItemsClients = [
  {
    id: 1,
    title: "Total utilisateurs",
    amount: 2341,
    lastIncome: 2219,
    description: "Depuis le debut",
    Icon: ClientIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
  {
    id: 2,
    title: "Total Marchands",
    amount: 1780,
    lastIncome: 2110,
    description: "Pendant le 90 jours",
    Icon: MarchandsIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
  {
    id: 3,
    title: "Total Administrateurs",
    amount: 235,
    lastIncome: 210,
    description: "Pendant ce mois ci",
    Icon: AdminsIcon,
    color: "#cc8605",
    background: "#e7dac2",
  },
];

export const cardItemsTransaction = [
  {
    id: 1,
    title: "Total",
    amount: 2341,
    lastIncome: 2219,
    description: "Depuis le debut",
    Icon: ClientIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
  {
    id: 2,
    title: "Total",
    amount: 1780,
    lastIncome: 2110,
    description: "Pendant le 90 jours",
    Icon: activeIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
];