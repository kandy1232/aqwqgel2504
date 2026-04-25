/* === AQWAGEL CONTACT INFO === */
/* Edit this file to update address and phone across all pages */

const AQWAGEL_CONTACT = {
  brand: "Aqwagel",
  website: "aqwagel.com",
  address: "No 17, Wikramasinghepura, Battaramulla, Sri Lanka",
  phone: "+94 71 729 9504",
  phoneLink: "tel:+94717299504",
  email: "hello@aqwagel.com",
  emailLink: "mailto:hello@aqwagel.com",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  mapUrl: "https://maps.google.com/?q=Battaramulla,Sri+Lanka"
};

function injectContactInfo(){
  document.querySelectorAll('[data-contact="address"]').forEach(el=>el.textContent=AQWAGEL_CONTACT.address);
  document.querySelectorAll('[data-contact="phone"]').forEach(el=>{
    el.textContent=AQWAGEL_CONTACT.phone;
    if(el.tagName==='A') el.href=AQWAGEL_CONTACT.phoneLink;
  });
  document.querySelectorAll('[data-contact="email"]').forEach(el=>{
    el.textContent=AQWAGEL_CONTACT.email;
    if(el.tagName==='A') el.href=AQWAGEL_CONTACT.emailLink;
  });
  document.querySelectorAll('[data-contact="hours"]').forEach(el=>el.textContent=AQWAGEL_CONTACT.hours);
}

document.addEventListener('DOMContentLoaded', injectContactInfo);
