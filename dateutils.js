/**
 * dateutils - Basic Date and Time Utility Functions
 * Author: AiutiDiGioco
 * License: Custom
 */

const dateutils = {
    /**
     * Returns the current date in YYYY-MM-DD format.
     * @returns {string}
     */
    today() {
        const date = new Date();
        return date.toISOString().split('T')[0];
    },

    /**
     * Formats a date object to DD/MM/YYYY.
     * @param {Date} date - The date to format.
     * @returns {string}
     */
    formatToItalian(date) {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            console.error('[dateutils] Invalid date provided.');
            return '';
        }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },

    /**
     * Calculates the difference in days between two dates.
     * @param {Date} date1 - First date.
     * @param {Date} date2 - Second date.
     * @returns {number}
     */
    diffInDays(date1, date2) {
        if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
            console.error('[dateutils] Invalid dates provided.');
            return NaN;
        }
        const diff = Math.abs(date2 - date1);
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
};

// Example usage:
// console.log(dateutils.today()); // '2024-06-24' (for example)
// console.log(dateutils.formatToItalian(new Date())); // '24/06/2024'
// console.log(dateutils.diffInDays(new Date('2024-06-01'), new Date('2024-06-24'))); // 23

module.exports = dateutils;
