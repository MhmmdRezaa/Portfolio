import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Copy, Check, AlertCircle } from 'lucide-react'

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const emailAddress = 'muhammad.rezaa.na@gmail.com' // Email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email'
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required'
    
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear validation error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)

    // Simulate API call
    setTimeout(() => {
      setSending(false)
      setSentSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Auto reset success message after 5 seconds
      setTimeout(() => setSentSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Conversational Info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full lg:sticky lg:top-28">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 tracking-wider uppercase mb-4 inline-block">
                Get In Touch
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl leading-tight text-white mb-6">
                Have a project idea? <span className="gradient-accent-text">Let's create something great.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed font-light mb-8">
                If you are looking for a designer to map user flows, a frontend developer to build responsive React SPAs, or an systems analyst to structure data architectures, let's talk.
              </p>
            </div>

            {/* Visual Action items */}
            <div className="flex flex-col gap-4 w-full">
              {/* Copy Email element */}
              <div className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Direct Email</span>
                    <span className="text-sm font-semibold text-white break-all">{emailAddress}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammadrezanuraditya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 rounded-2xl glass-panel border border-white/5 hover:border-white/20 hover:bg-white/5 text-zinc-450 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MhmmdRezaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-4 rounded-2xl glass-panel border border-white/5 hover:border-white/20 hover:bg-white/5 text-zinc-450 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-100" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              
              <h3 className="font-heading font-bold text-xl text-white mb-6 text-left">Send a Message</h3>

              {sentSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg">Message Dispatched!</h4>
                  <p className="text-zinc-450 text-xs max-w-sm leading-relaxed font-sans font-light">
                    Thanks for reaching out! I have received your message mockup and will respond to your registered email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 text-left">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Your Name"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-zinc-550 outline-none focus:bg-white/[0.08] transition-all ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <div className="absolute right-3 top-3.5 flex items-center gap-1 text-red-400">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.name && <span className="text-[10px] text-red-400 font-medium">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Your Email"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-zinc-550 outline-none focus:bg-white/[0.08] transition-all ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <div className="absolute right-3 top-3.5 flex items-center gap-1 text-red-400">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.email && <span className="text-[10px] text-red-400 font-medium">{errors.email}</span>}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Hi Reza, let's collaborate on..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border text-sm text-white placeholder-zinc-550 outline-none focus:bg-white/[0.08] resize-none transition-all ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                        }`}
                      />
                      {errors.message && (
                        <div className="absolute right-3 top-4 flex items-center gap-1 text-red-400">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.message && <span className="text-[10px] text-red-400 font-medium">{errors.message}</span>}
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 disabled:bg-zinc-700 disabled:text-zinc-400 transition-all cursor-pointer shadow-lg active:scale-98"
                  >
                    {sending ? (
                      <div className="w-5 h-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
