// config.js - النسخة المطورة
const DefaultConfig = {
    API: {
        base: "http://ottpro.iptvpro2.com:8789",
        user: "Oujakr12",
        pass: "87593226"
    },
    UI: {
        appName: "DAMI X-PRO",
        themeColor: "#d4af37"
    }
};

// تحميل الإعدادات من الذاكرة أو استخدام الافتراضية
let ServerConfig = JSON.parse(localStorage.getItem('dami_settings')) || DefaultConfig;

function saveNewSettings(newSettings) {
    localStorage.setItem('dami_settings', JSON.stringify(newSettings));
    location.reload(); // إعادة تحميل لتطبيق الإعدادات
}
