import overview from '../assets/overview.svg';
import budget from '../assets/budget.svg';
import reports from '../assets/reports.svg';
import transaction from '../assets/transaction.svg';
import rates from '../assets/rates.svg';
import saved from '../assets/saved.svg';
import card from '../assets/credit-card.svg';

export const mainSidebar = [
    {
        text: 'overview',
        icon: overview,
        path: '/'
    },
    {
        text: 'budget',
        icon: budget,
        path: '/budget'
    },
    {
        text: 'reports',
        icon: reports,
        path: '/reports'
    },
]

export const accountSidebar = [
    {
        text: 'all transactions',
        icon: transaction
    },
    {
        text: 'saved',
        icon: saved
    },
    {
        text: 'credit card',
        icon: card
    },
    {
        text: 'rated',
        icon: rates
    }
]