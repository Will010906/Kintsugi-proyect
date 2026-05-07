<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logoDark from '../../assets/logo-kinsugi-dark.png'
import FrequencySelector from './FrequencySelector.vue'

const route = useRoute()
const router = useRouter()

// Datos venidos de la card anterior
const frequency = ref(route.query.freq || 'una-vez')
const amount = ref(Number(route.query.amount) || 0)
const note = ref('')
const showNote = ref(false)

// Estado del formulario
const form = ref({
  country: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
  firstName: '',
  lastName: '',
  address: '',
  apt: '',
  city: '',
  state: '',
  zipCode: '',
  phone: '',
  email: '',
  consent: false,
})

// Estado de errores: cada campo guarda su propio mensaje
const errors = ref({})

// Listas
const countries = ['México', 'Estados Unidos', 'Colombia', 'Argentina', 'España', 'Otro']
const mexicanStates = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'CDMX', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango',
  'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco',
  'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla',
  'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora',
  'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas',
]

// ─── AUTO-FORMATO ───────────────────────────────────────

// Tarjeta: agrupa cada 4 dígitos con espacios, máx 16 dígitos
const formatCardNumber = (e) => {
  let val = e.target.value.replace(/\D/g, '').slice(0, 16)
  form.value.cardNumber = val.replace(/(\d{4})(?=\d)/g, '$1 ')
  validateField('cardNumber')
}

// Fecha: MM/AA con slash automático
const formatExpiry = (e) => {
  let val = e.target.value.replace(/\D/g, '').slice(0, 4)
  if (val.length >= 2) {
    val = val.slice(0, 2) + '/' + val.slice(2)
  }
  form.value.expiry = val
  validateField('expiry')
}

// CVV: solo dígitos, máx 4
const formatCvv = (e) => {
  form.value.cvv = e.target.value.replace(/\D/g, '').slice(0, 4)
  validateField('cvv')
}

// Teléfono: solo dígitos, máx 15
const formatPhone = (e) => {
  form.value.phone = e.target.value.replace(/\D/g, '').slice(0, 15)
  validateField('phone')
}

// Código postal: solo dígitos, máx 5 (México)
const formatZip = (e) => {
  form.value.zipCode = e.target.value.replace(/\D/g, '').slice(0, 5)
  validateField('zipCode')
}

// ─── VALIDACIONES ───────────────────────────────────────

const validateField = (field) => {
  const f = form.value
  const e = errors.value
  
  switch (field) {
    case 'cardNumber': {
      const digits = f.cardNumber.replace(/\s/g, '')
      if (!digits) e.cardNumber = 'Ingresa el número de tarjeta'
      else if (digits.length < 15) e.cardNumber = 'Mínimo 15 dígitos'
      else if (digits.length > 16) e.cardNumber = 'Máximo 16 dígitos'
      else delete e.cardNumber
      break
    }
    case 'expiry': {
      if (!f.expiry) {
        e.expiry = 'Ingresa fecha'
      } else if (f.expiry.length < 5) {
        e.expiry = 'Formato MM/AA'
      } else {
        const [mm, aa] = f.expiry.split('/').map(Number)
        const now = new Date()
        const currentYear = now.getFullYear() % 100
        const currentMonth = now.getMonth() + 1
        
        if (mm < 1 || mm > 12) e.expiry = 'Mes inválido (01-12)'
        else if (aa < currentYear) e.expiry = 'Tarjeta vencida'
        else if (aa === currentYear && mm < currentMonth) e.expiry = 'Tarjeta vencida'
        else delete e.expiry
      }
      break
    }
    case 'cvv': {
      if (!f.cvv) e.cvv = 'Ingresa CVV'
      else if (f.cvv.length < 3) e.cvv = 'Mínimo 3 dígitos'
      else delete e.cvv
      break
    }
    case 'email': {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!f.email) e.email = 'Ingresa correo'
      else if (!re.test(f.email)) e.email = 'Correo inválido'
      else delete e.email
      break
    }
    case 'phone': {
      if (!f.phone) e.phone = 'Ingresa teléfono'
      else if (f.phone.length < 8) e.phone = 'Mínimo 8 dígitos'
      else delete e.phone
      break
    }
    case 'zipCode': {
      if (!f.zipCode) e.zipCode = 'Ingresa código postal'
      else if (f.zipCode.length < 4) e.zipCode = 'Código postal inválido'
      else delete e.zipCode
      break
    }
  }
}

// El form es válido si: todos los campos requeridos llenos, sin errores, y consent
const isFormValid = computed(() => {
  const f = form.value
  return (
    f.country &&
    f.cardNumber.replace(/\s/g, '').length >= 15 &&
    f.expiry.length === 5 &&
    f.cvv.length >= 3 &&
    f.firstName.trim() &&
    f.lastName.trim() &&
    f.address.trim() &&
    f.city.trim() &&
    f.state &&
    f.zipCode &&
    f.phone &&
    f.email.includes('@') &&
    f.consent &&
    Object.keys(errors.value).length === 0
  )
})

// ─── SUBMIT ─────────────────────────────────────────────

const handleSubmit = () => {
  // Forzar validación de todos los campos antes de enviar
  ;['cardNumber', 'expiry', 'cvv', 'email', 'phone', 'zipCode'].forEach(validateField)
  
  if (!isFormValid.value) {
    alert('Revisa los campos marcados en rojo antes de continuar.')
    return
  }
  
  // 👉 AQUÍ va la integración con la pasarela de pago real
  console.log('Donación enviada:', {
    frequency: frequency.value,
    amount: amount.value,
    note: note.value,
    ...form.value,
  })
  
  alert(`¡Gracias por tu donación de $${amount.value}!`)
  router.push('/')
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white rounded-3xl shadow-2xl shadow-kintsugi-deep/10 p-8 sm:p-10 border border-kintsugi-deep/5">
    
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <img :src="logoDark" alt="Kinsugi Love House" class="h-24 w-auto object-contain" />
    </div>

    <!-- Selector de frecuencia -->
    <div class="flex justify-center mb-5">
      <FrequencySelector v-model="frequency" />
    </div>

    <!-- Monto + nota -->
    <div class="text-center mb-6">
      <div class="flex items-baseline justify-center gap-1 mb-2">
        <span class="font-display text-3xl text-kintsugi-ink">$</span>
        <input 
          v-model.number="amount"
          type="number"
          min="0"
          placeholder="0"
          class="font-display text-5xl text-kintsugi-ink bg-transparent text-center w-32 outline-none focus:border-b-2 focus:border-kintsugi-deep"
        />
      </div>
      <button 
        v-if="!showNote" 
        @click="showNote = true"
        type="button"
        class="text-sm text-kintsugi-deep/70 hover:text-kintsugi-deep underline"
      >
        + Escribir una nota (opcional)
      </button>
      <textarea 
        v-else
        v-model="note"
        placeholder="Escribe tu nota..."
        rows="2"
        class="w-full mt-2 text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep resize-none"
      />
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>

      <!-- DATOS DE LA TARJETA -->
      <div>
        <h3 class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-2 font-medium">
          Datos de la tarjeta
        </h3>
        <div class="space-y-3">

          <select 
            v-model="form.country"
            class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep bg-white"
          >
            <option value="" disabled>País o Región</option>
            <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
          </select>

          <!-- Número tarjeta -->
          <div>
            <input 
              :value="form.cardNumber"
              @input="formatCardNumber"
              @blur="validateField('cardNumber')"
              type="text"
              placeholder="Número de tarjeta"
              :class="[
                'w-full text-sm border rounded-xl p-3 focus:outline-none transition-colors',
                errors.cardNumber 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-kintsugi-deep/20 focus:border-kintsugi-deep'
              ]"
            />
            <p v-if="errors.cardNumber" class="text-xs text-red-500 mt-1 ml-1">{{ errors.cardNumber }}</p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <!-- Fecha -->
            <div>
              <input 
                :value="form.expiry"
                @input="formatExpiry"
                @blur="validateField('expiry')"
                type="text"
                placeholder="MM/AA"
                maxlength="5"
                :class="[
                  'w-full text-sm border rounded-xl p-3 focus:outline-none transition-colors',
                  errors.expiry 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-kintsugi-deep/20 focus:border-kintsugi-deep'
                ]"
              />
              <p v-if="errors.expiry" class="text-xs text-red-500 mt-1 ml-1">{{ errors.expiry }}</p>
            </div>
            <!-- CVV -->
            <div>
              <input 
                :value="form.cvv"
                @input="formatCvv"
                @blur="validateField('cvv')"
                type="text"
                placeholder="CVV"
                maxlength="4"
                :class="[
                  'w-full text-sm border rounded-xl p-3 focus:outline-none transition-colors',
                  errors.cvv 
                    ? 'border-red-400 focus:border-red-500' 
                    : 'border-kintsugi-deep/20 focus:border-kintsugi-deep'
                ]"
              />
              <p v-if="errors.cvv" class="text-xs text-red-500 mt-1 ml-1">{{ errors.cvv }}</p>
            </div>
          </div>

          <input 
            v-model="form.firstName"
            type="text"
            placeholder="Nombre completo"
            class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep"
          />
          <input 
            v-model="form.lastName"
            type="text"
            placeholder="Apellido completo"
            class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep"
          />
        </div>
      </div>

      <!-- DIRECCIÓN -->
      <div>
        <h3 class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-2 mt-5 font-medium">
          Dirección de la tarjeta
        </h3>
        <div class="space-y-3">
          <input 
            v-model="form.address"
            type="text"
            placeholder="Dirección postal"
            class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep"
          />
          <input 
            v-model="form.apt"
            type="text"
            placeholder="Apto, edificio, piso (opcional)"
            class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep"
          />
          <div class="grid grid-cols-2 gap-3">
            <input 
              v-model="form.city"
              type="text"
              placeholder="Ciudad"
              class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep"
            />
            <select 
              v-model="form.state"
              class="w-full text-sm border border-kintsugi-deep/20 rounded-xl p-3 focus:outline-none focus:border-kintsugi-deep bg-white"
            >
              <option value="" disabled>Estado</option>
              <option v-for="s in mexicanStates" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <input 
              :value="form.zipCode"
              @input="formatZip"
              @blur="validateField('zipCode')"
              type="text"
              placeholder="Código postal"
              :class="[
                'w-full text-sm border rounded-xl p-3 focus:outline-none transition-colors',
                errors.zipCode 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-kintsugi-deep/20 focus:border-kintsugi-deep'
              ]"
            />
            <p v-if="errors.zipCode" class="text-xs text-red-500 mt-1 ml-1">{{ errors.zipCode }}</p>
          </div>
        </div>
      </div>

      <!-- CONTACTO -->
      <div>
        <h3 class="text-xs uppercase tracking-wider text-kintsugi-ink/60 mb-2 mt-5 font-medium">
          Información de contacto
        </h3>
        <div class="space-y-3">
          <div>
            <input 
              :value="form.phone"
              @input="formatPhone"
              @blur="validateField('phone')"
              type="tel"
              placeholder="Número de teléfono"
              :class="[
                'w-full text-sm border rounded-xl p-3 focus:outline-none transition-colors',
                errors.phone 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-kintsugi-deep/20 focus:border-kintsugi-deep'
              ]"
            />
            <p v-if="errors.phone" class="text-xs text-red-500 mt-1 ml-1">{{ errors.phone }}</p>
          </div>
          <div>
            <input 
              v-model="form.email"
              @blur="validateField('email')"
              type="email"
              placeholder="Correo electrónico"
              :class="[
                'w-full text-sm border rounded-xl p-3 focus:outline-none transition-colors',
                errors.email 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-kintsugi-deep/20 focus:border-kintsugi-deep'
              ]"
            />
            <p v-if="errors.email" class="text-xs text-red-500 mt-1 ml-1">{{ errors.email }}</p>
          </div>
        </div>
      </div>

      <!-- Consentimiento -->
      <label class="flex items-start gap-3 cursor-pointer mt-5">
        <input 
          v-model="form.consent"
          type="checkbox"
          class="mt-1 w-4 h-4 accent-kintsugi-deep cursor-pointer"
        />
        <span class="text-xs text-kintsugi-ink/70 leading-relaxed">
          Confirmo que tengo al menos 18 años de edad y que acepto los términos. He leído y acepto la divulgación de firma electrónica y el consentimiento.
        </span>
      </label>

      <!-- Submit -->
      <button 
        type="submit"
        :disabled="!isFormValid"
        :class="[
          'w-full py-3.5 rounded-full font-medium transition-all',
          isFormValid 
            ? 'bg-kintsugi-deep text-white hover:bg-kintsugi-ink hover:scale-[1.02] cursor-pointer' 
            : 'bg-kintsugi-deep/30 text-white/70 cursor-not-allowed'
        ]"
      >
        Donar
      </button>

    </form>
  </div>
</template>