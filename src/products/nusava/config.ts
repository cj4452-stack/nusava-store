import type { ProductConfig } from '../types';

export const nusavaConfig: ProductConfig = {
  slug: 'nusava-b12',
  name: 'Nusava® Complejo de Vitamina B12 + B6 + B1',
  tagline: 'Ese cansancio constante es tu cuerpo pidiéndote ayuda. Con vitamina B12, tu día rinde completo y la noche sigue siendo tuya.',
  volume: '60 ml por frasco (120 ml en Combo 2x1)',
  flavor: 'Sabor Frambuesa Natural',
  badges: ['Vegano 100%', 'Sin Gluten', 'Non-GMO', 'Absorción Sublingual Rápida', 'Pago Contra Entrega'],
  packs: [
    {
      id: 'pack-1',
      bottles: 1,
      title: '1 Frasco (60 ml)',
      badge: 'Prueba Inicial',
      originalPrice: 34990,
      finalPrice: 19990,
      savings: 15000,
      isPopular: false
    },
    {
      id: 'pack-2',
      bottles: 2,
      title: 'Combo 2x1 (120 ml)',
      badge: 'OFERTA MÁS ELEGIDA · PAGAS 1 LLEVAS 2',
      originalPrice: 99990,
      finalPrice: 29990,
      savings: 70000,
      isPopular: true
    },
    {
      id: 'pack-3',
      bottles: 3,
      title: 'Mega Pack 3x1 (180 ml)',
      badge: 'MÁXIMO AHORRO TRATAMIENTO',
      originalPrice: 129990,
      finalPrice: 38990,
      savings: 91000,
      isPopular: false
    }
  ],
  ingredients: [
    {
      name: 'Vitamina B12',
      dose: '5000 mcg',
      color: '#E11D48',
      benefit: 'Metilcobalamina de alta pureza. Estimula la formación de energía celular y protege el sistema nervioso contra la fatiga.'
    },
    {
      name: 'Vitamina B6',
      dose: '3400 mcg',
      color: '#F97316',
      benefit: 'Crucial para la claridad mental, el metabolismo de proteínas y la síntesis de neurotransmisores del buen ánimo.'
    },
    {
      name: 'Vitamina B1',
      dose: '2400 mcg',
      color: '#F59E0B',
      benefit: 'Transforma los nutrientes de los alimentos en energía ATP limpia y constante para músculos y cerebro.'
    },
    {
      name: 'Niacina + Folato',
      dose: 'Fórmula Activa',
      color: '#48A127',
      benefit: 'Optimiza la microcirculación y oxigenación para que el rendimiento físico y mental se mantenga estable.'
    }
  ],
  tinnitusClaims: [
    'Que todavía te quede batería después del trabajo para tu familia, tus planes y para ti.',
    'Sentirte más presente: afrontar responsabilidades con mayor claridad y sin sentir que cada tarea cuesta el doble.',
    'Volver a hacer lo que disfrutas: caminar, salir, entrenar o tus hobbies sin sentir que ya no te queda nada.',
    'Empezar cada mañana con otra disposición, sin sentir que tu batería ya arranca a la mitad.'
  ],
  energyClaims: [
    'Absorción sublingual directa: entra al torrente sanguíneo en minutos sin pasar por el tracto digestivo.',
    'Sin la pesadez de pastillas difíciles de tragar ni las molestias gástricas de cápsulas convencionales.',
    'Energía limpia y sostenida sin cafeína, sin taquicardias y sin el temido bajón de la tarde.',
    'Fórmula certificada de libre venta con buenas prácticas de manufactura (GMP Tested).'
  ],
  routineSteps: [
    {
      step: 1,
      title: 'Tómalo por la mañana',
      description: 'Al despertar o junto a tu desayuno. Su fresco sabor frambuesa es delicioso y fácil de incorporar.',
      image: '/media/nusava/rutina-cocina.jpg'
    },
    {
      step: 2,
      title: '5 gotas debajo de la lengua',
      description: 'Carga el gotero y mantenlo bajo la lengua unos segundos para una absorción sublingual inmediata.',
      image: '/media/nusava/ugc-selfie.jpg'
    },
    {
      step: 3,
      title: 'Siente que tu día rinde',
      description: 'Mantén la claridad y la batería encendida para rendir en el trabajo y disfrutar tu tiempo libre.',
      image: '/media/nusava/enfoque-escritorio.jpg'
    }
  ],
  reviews: [
    {
      author: 'Nayeli Rojas',
      age: 28,
      city: 'Santiago Centro',
      stars: 5,
      comment: 'El trabajo me dejaba con la batería agotada a las 2 de la tarde. Este gotero me cambió la rutina: claridad mental desde temprano y sin la taquicardia del café.',
      avatar: '/media/nusava/testimonio-1.jpg',
      verified: true
    },
    {
      author: 'Diego Ramírez',
      age: 41,
      city: 'Viña del Mar',
      stars: 5,
      comment: 'Llegaba del trabajo destruido, sin ganas de nada. Llevo 3 semanas con Nusava y la diferencia es enorme: me queda energía para compartir con mis hijos al llegar a casa.',
      avatar: '/media/nusava/testimonio-2.jpg',
      verified: true
    },
    {
      author: 'Fabiola Gómez',
      age: 33,
      city: 'Concepción',
      stars: 5,
      comment: 'Compré la promo 2x1 y me llegó al día siguiente con pago al recibir. Es muy rico de sabor y despertar con otra disposición hace una diferencia enorme en mi día.',
      avatar: '/media/nusava/testimonio-3.jpg',
      verified: true
    }
  ]
};
