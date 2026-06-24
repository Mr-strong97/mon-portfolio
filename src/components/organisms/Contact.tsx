import React from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Brain, Sparkles } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useForm, useIntersectionObserver } from '../../hooks';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  projectType: '',
  budget: '',
  message: '',
  privacy: '',
};

const projectTypes = ['Site web', 'App Mobile', 'IA', 'Design', 'Autre'];
const budgets = ['< 500$', '500-1000$', '1000-3000$', '3000$+'];
const contactEndpoint = 'https://formsubmit.co/ajax/mkstrong915@gmail.com';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const aiImageUrl = `${import.meta.env.BASE_URL}ia.jpg`;
  const { values, errors, isSubmitting, isSuccess, formError, handleChange, handleSubmit } = useForm(initialValues, async (formValues) => {
    const payload = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      payload.append(key, value);
    });

    payload.append('_captcha', 'false');
    payload.append('_template', 'table');
    payload.append('_subject', `Nouveau message portfolio - ${formValues.subject || 'Nouveau projet'}`);
    payload.append('_replyto', formValues.email);

    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: payload,
    });

    if (!response.ok) {
      throw new Error('Impossible d\'envoyer le message pour le moment.');
    }
  });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center px-3 py-1 blue-badge rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            CONTACT
          </span>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`bg-white rounded-2xl border border-gray-100 shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden reveal ${isVisible ? 'visible' : ''}`}
        >
          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* Left: Info panel */}
            <div className="bg-primary p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold font-poppins text-white leading-tight mb-4">
                  Commençons quelque chose ensemble
                </h2>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Vous avez un projet en tête ou vous souhaitez simplement discuter de technologie ? N'hésitez pas à me contacter. Je réponds généralement sous 24 heures.
                </p>

                <div className="mb-8 rounded-2xl bg-white/10 border border-white/10 p-4 flex items-center gap-4">
                  <img
                    src={aiImageUrl}
                    alt="Illustration IA"
                    className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-white/20"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <Sparkles size={16} />
                      IA + Réseaux
                    </div>
                    <div className="text-blue-100 text-xs leading-relaxed mt-1">
                      Automatisation, branding et expérience sociale plus claire.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-wide mb-0.5">EMAIL</div>
                      <div className="text-white font-medium text-sm">mkstrong915@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200 uppercase tracking-wide mb-0.5">LOCALISATION</div>
                      <div className="text-white font-medium text-sm">Disponible à distance</div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
                  <span className="text-blue-100 text-sm font-medium"> Disponible pour freelance</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/20 my-8" />

              {/* Social links */}
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaac-mbuyama-9b9781362/' },
                  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Mr-strong97' },
                  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/monsieurstrong01?igsh=cHN4ZTZubXhpMnRk' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <Icon size={17} />
                  </a>
                ))}
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white" aria-hidden="true">
                  <Brain size={17} />
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 lg:p-10">
              {isSuccess && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  <CheckCircle size={18} />
                  <span className="font-medium text-sm">Message envoyé avec succès ! Je vous recontacte sous 24h.</span>
                </div>
              )}

              {formError && (
                <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <AlertCircle size={18} />
                  <span className="font-medium text-sm">{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Nom complet</label>
                    <input
                      type="text"
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Jean Dupont"
                      className={`w-full px-4 py-3 border rounded-xl text-sm form-input transition-all duration-200 ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="jean.dupont@example.com"
                      className={`w-full px-4 py-3 border rounded-xl text-sm form-input transition-all duration-200 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Sujet</label>
                  <select
                    value={values.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm form-input bg-white appearance-none"
                  >
                    <option value="">Nouveau projet</option>
                    {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget estimé</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => handleChange('budget', b)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                          values.budget === b
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    value={values.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Parlez-moi de votre projet..."
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-xl text-sm form-input resize-none transition-all duration-200 ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    onChange={(e) => handleChange('privacy', e.target.checked ? 'true' : '')}
                    className="mt-0.5 w-4 h-4 text-primary border-gray-300 rounded accent-primary"
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
                    En envoyant ce formulaire, j'accepte que mes données soient traitées conformément à la politique de confidentialité du site.
                  </label>
                </div>
                {errors.privacy && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.privacy}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
