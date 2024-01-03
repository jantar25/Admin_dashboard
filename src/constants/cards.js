import { ReactComponent as ClientIcon } from "../assets/icons/clients.svg";
import { ReactComponent as activeIcon } from "../assets/icons/time.svg";
import { ReactComponent as MarchandsIcon } from "../assets/icons/marchants.svg";
import { ReactComponent as AdminsIcon } from "../assets/icons/admins.svg";
import { ReactComponent as ActivatedUsersIcon } from "../assets/icons/activated_user.svg";
import { ReactComponent as ActivatedMarchantsIcon } from "../assets/icons/activated_marchant.svg";
// import { ReactComponent as chartIcon } from "../assets/icons/histogram.svg";
// import { ReactComponent as cashIcon } from "../assets/icons/dollar.svg";
// import { ReactComponent as DepositIcon } from "../assets/icons/bank.svg";

export const cardItems = [
  {
    id: 1,
    title: "Total Clients",
    amount: 51300,
    lastIncome: 59300,
    description: "Pendant ce mois ci",
    Icon: ClientIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
  {
    id: 2,
    title: "Clients Actives",
    amount: 5500,
    lastIncome: 10300,
    description: "Pendant ce mois ci",
    Icon: ActivatedUsersIcon,
    color: "#044404",
    background: "#c4e6c4",
  },
  {
    id: 3,
    title: "Total Marchands",
    amount: 235,
    lastIncome: 210,
    description: "Pendant ce mois ci",
    Icon: MarchandsIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
  {
    id: 4,
    title: "Marchands Actives",
    amount: 235,
    lastIncome: 200,
    description: "Pendant ce mois ci",
    Icon: ActivatedMarchantsIcon,
    color: "#004B77",
    background: "#cee2ee",
  },
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