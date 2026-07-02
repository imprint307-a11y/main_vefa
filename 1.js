/* =========================
   بيانات المنتجات
   عدّل الاسم، السعر، الفيديو، والوصف حسب منتجاتك
========================= */

const productCategories = [
  {
    id:  "Dental clinics", 
    title: "عيادات الاسنان " ,
    label: "NEW Dental clinics ",
    description: "بنية بصرية فاخرة تُبرز هوية العيادة، وتدمج مقاطع الفيديو الحية من داخل غرف العلاج مع جولات افتراضية تصنع تجربة تصفح مطمئنة وجاذبة للنخبة." ,
    products: [
      {
        title: "Imprint Dental clinics 01",
        price: "28 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782951268/Screen_Recording_2026-07-02_031327_x7eo7k.mp4",
        link: " https://imprint307-a11y.github.io/new11/",
        description:"واجهة رقمية متطورة تعتمد على المحاكاة البصرية ثلاثية الأبعاد واستعراض الحالات الفورية، لتقدم للمريض تجربة بصرية حية للابتسامة قبل تصميمها." ,
      },
      {
        title: "Imprint Dental clinics 02",
        price: "28 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782951839/Screen_Recording_2026-07-02_032259_ukegz5.mp4",
        link: " https://imprint307-a11y.github.io/new1/",
        description: "منصة بصرية راقية تبرز هوية العيادة الفخمة، وتدمج الجولات الافتراضية مع مقاطع الفيديو السينمائية لتعكس تجربة علاجية حصرية تليق بالنخبة." ,
      },
      {
        title: "Imprint Dental clinics 03",
        price: "28 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782952346/Screen_Recording_2026-07-02_033121_opzt91.mp4",
        link: " https://imprint307-a11y.github.io/new2/",
        description: "بنية ويب دافئة ترتكز على قصص المرضى والمحتوى التوعوي، ومصممة بواجهة تصفح مريحة تكسر حاجز الخوف وتصنع رابطاً من الثقة المتبادلة."
      }
    ]
  } 
  ,
  
  {
    id: "medical",
    title: "للدكاترة والقطاع الطبي",
    label: "Medical Imprints",
    description: "نماذج تركّز على الثقة، الخبرة، المؤهلات، الخدمات الطبية، وطرق الحجز أو التواصل.",
    products: [
      {
        title: "Imprint Doctor Profile 01 ",
        price: "14 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782686884/mid1_x4c7kg.mp4",
        link: " https://imprint307-a11y.github.io/Imprint_model/",
        description:" هذا الأسلوب يركز على الكفاءة، الدقة، وبناء سلطة طبية (Authority) قوية تلائم المنصات المهنية مثل LinkedIn أو مواقع المستشفيات."
      },
      {
        title: "Imprint Doctor Profile 02 ",
        price: "13 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782688244/mid2_wcde2y.mp4",
        link: "https://imprint307-a11y.github.io/mid2/",
        description: " يركز هذا الأسلوب على المريض كإنسان، ويبني جسرًا من الثقة والراحة النفسية، وهو ممتاز لصفحات التواصل الاجتماعي (انستغرام/فيسبوك)."
      },
      {
        title: "Imprint Doctor Profile 03 ",
        price: "24 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782688950/mid3_gdxeym.mp4",
        link: " https://imprint307-a11y.github.io/mid3/",
        description: " أسلوب سريع، ذكي، ومباشر، يعتمد على لغة العصر ويناسب الأطباء الذين يستخدمون تقنيات حديثة أو يقدمون استشارات أونلاين."
      }
      ,
      {
        title: "Imprint Doctor Profile 04 ",
        price: "9 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782689648/mid4_dnbmab.mp4",
        link: "https://imprint307-a11y.github.io/mid4/",
        description:' أسلوب قوي ومبهر، يعتمد على الأرقام والإنجازات الجاذبة للانتباه (Bold)، وممتاز لجذب فئات تبحث عن التميز والنتائج المضمونة.'
      }
      ,
      {
        title: "Imprint Doctor Profile 05",
        price: "25 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782690182/mid5_gyi50n.mp4",
        link: "https://imprint307-a11y.github.io/mid5/",
        description: " حيث تلتقي الريادة الأكاديمية العالمية بأعلى مستويات الدقة الطبية، لنقدم للنخبة رعاية استثنائية تصنع الفارق وتضمن الأمان المطلق."
      }
      ,
      {
        title: "Imprint Doctor Profile 06 ",
        price: "21 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782690773/nid6_tijw0r.mp4",
        link: "https://imprint307-a11y.github.io/mid6/",
        description:' يركز هذا الأسلوب على التفرد، الجودة العالية، وتقديم تجربة علاجية فاخرة ومريحة للمريض (VIP)، وهو رائع جداً للمراكز والعيادات الطبية التي تستهدف شرائح تبحث عن أعلى درجات الرفاهية والاهتمام الشخصي.'
      }
      ,
      {
        title: "Imprint Doctor Profile 07",
        price: "14 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782691180/mid7_qc51wc.mp4",
        link: "https://imprint307-a11y.github.io/mid7/",
        description:' يعتمد هذا الأسلوب على السرد القصصي الجاذب، حيث يحول البورتفوليو إلى رحلة تبدأ بالشغف وتنتهي بتمكين المريض، وهو ممتاز جداً لصفحة "من أنا" (About Me) في المواقع الإلكترونية. ' 
      }
    ]
  }
  ,
  {
    id: "design",
    title: "للمصممين والمبدعين",
    label: "Creative Imprints",
    description: "نماذج بصرية تركّز على الأعمال، الهوية، الصور، الفيديوهات، وتجربة التصفح الجذابة.",
    products: [
      {
        title: "Imprint Designer Gallery 01",
        price: "22 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782694006/art1_hkroe5.mp4",
        link: "https://imprint307-a11y.github.io/art1/",
        description:" مساحة بصرية وأدبية تلتقي فيها دقة الريشة بعمق الكلمة، لنصنع من الفن بصمة حية تُلهم العقول وتخلد الأثر."
      },
      {
        title: "Imprint Photographer Mood 02",
        price: "14 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782694384/art2_sbrl6n.mp4",
        link: "https://imprint307-a11y.github.io/art2/",
        description: "  معرض رقمي متكامل ينسج لوحات الفن التشكيلي مع روائع النثر الأدبي، ليقدم تجربة جمالية ملهمة ومصممة بدقة للنخبة من تذوقي الفن"
      }
    ]}
  ,{
    id: "tech",
    title: "للمبرمجين والتقنيين",
    label: "Tech Imprints",
    description: "نماذج تبرز GitHub، المشاريع البرمجية، المهارات، اللغات، التقنيات، وروابط التواصل المهني.",
    products: [
      {
        title: "Imprint Developer Portfolio 01",
        price: "14 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782917283/cyber11_yj6zh4.mp4",
        link: "https://imprint307-a11y.github.io/cyber1/",
        description: " بناء الحصون الرقمية وتأمين البنى التحتية الحساسة عبر استراتيجيات سيبرانية استباقية تحول دون اختراق بياناتك، وتضمن استمرارية أعمالك بأمان مطلق."
      }
      ,{
        title: "Imprint Startup Profile 02 ",
        price: "23 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782918466/cyber3_txohko.mp4",
        link: " https://imprint307-a11y.github.io/cyber3/",
        description:  " حيث يلتقي التحليل السيبراني الدقيق بالحلول الدفاعية المتقدمة، لنمنح مؤسستك بيئة رقمية منيعة تتصدى لأعقد التهديدات وتضمن الامتثال لأعلى المعايير الأمنية. "
      }
      ,
        {
        title: "Imprint Developer Portfolio 03",
        price: "8 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782917837/cyber2_ysecf1.mp4",
        link: " https://imprint307-a11y.github.io/cyber2/",
        description: " تمكين المؤسسات الرائدة من قيادة التحول الرقمي بثقة، من خلال صياغة حلول أمنية متكاملة تحمي أصولك الرقمية وتجعل من الأمن السيبراني دافعاً للنمو لا عائقاً له. "
      },
      {
        title: "Imprint Startup Profile 04",
        price: "17 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782921693/b1_snjoqe.mp4",
        link: "https://imprint307-a11y.github.io/cyber2/",
        description:" هندسة بنيات تحتية برمجية فائقة الأمان وقابلة للتوسع اللانهائي، تضمن تشغيل أنظمتك المعقدة ومعالجة ملايين البيانات يومياً بسلاسة مطلقة ودون أي توقف."
      },
      {
        title: "Imprint Startup Profile 05",
        price: "18 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782923722/b22_qlsewk.mp4",
        link: " https://imprint307-a11y.github.io/b2/",
        description: " تحويل الأكواد البرمجية إلى محركات سريعة ونظيفة؛ نركز على تحسين أداء الخوادم (Servers) وتسريع استعلامات قواعد البيانات لتمنح مستخدميك تجربة تصفح فورية وخالية من الأخطاء."
      }
      ,
      {
        title: "Imprint Startup Profile 06",
        price: "14 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782922753/b3_xuawl0.mp4",
        link: "https://imprint307-a11y.github.io/b3/",
        description: "الواجهات الجميلة تجذب المستخدمين، لكن الأنظمة الخلفية القوية هي ما تبقيهم؛ أتميز ببناء المنطق البرمجي الصلب والـ APIs الذكية التي تدير عمل تطبيقك بكفاءة متناهية."
      }
      ,
      {
        title: "Imprint Startup Profile 07",
        price: "18 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782923482/b4_vndcia.mp4",
        link: "https://imprint307-a11y.github.io/b4/",
        description: "تطوير أنظمة خلفية تعتمد على مبدأ 'الأمان أولاً'، من خلال تشفير البيانات الحساسة، تأمين الـ APIs، وبناء جدران برمجية تضمن حماية أصول شركتك من الثغرات."
      }
      ,
      {
        title: "Imprint Startup Profile 08",
        price: "8 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782928049/b6_odc8fh.mp4",
        link: "https://imprint307-a11y.github.io/b6/",
        description: "صياغة وهندسة RESTful و GraphQL APIs متكاملة تضمن ربطاً ذكياً وسلساً بين مختلف الأنظمة والخدمات السحابية، لتحقيق تدفق بيانات آمن وفوري."
      }
      ,
      {
        title: "Imprint Startup Profile 09",
        price: "12 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782928560/b7_lbrpv1.mp4",
        link: "https://imprint307-a11y.github.io/b7/",
        description: "حيثما وجدت التحديات البرمجية المعقدة في قواعد البيانات والـ Microservices، أتدخل لتبسيطها وتحويل المنطق المعقد إلى نظام برمي مرن، نظيف، وسهل الصيانة."
      }
      ,
      {
        title: "Imprint Startup Profile 011",
        price: "11 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782929663/b8_bff5eu.mp4",
        link: "https://imprint307-a11y.github.io/b8/",
        description: "ترجمة أفكار مشروعك الطموحة إلى واقع رقمي ملموس، عبر بناء منطق عمل (Business Logic) متقن يدعم أهدافك التجارية ويتحمل ضغط المستخدِمين المتزايد."
      }
      ,
      {
        title: "Imprint Startup Profile 012 ",
        price: "10 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782930032/b9_fzz76h.mp4",
        link: " https://imprint307-a11y.github.io/b9/",
        description: "شغفي هو كتابة كود نظيف (Clean Code) وتصميم معماريات برمجية قياسية، مما يضمن لشركتك نظاماً مرناً يسهل تطويره وإضافة ميزات جديدة له في المستقبل بسلاسة."
      }
      ,
      {
        title: "Imprint Startup Profile 013",
        price: "17 US Dollar ",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782930327/b10_t3y4h8.mp4",
        link: "https://imprint307-a11y.github.io/b10/",
        description: "تطوير حلول خلفية متوافقة تماماً مع البيئات السحابية (Cloud-Native)، مع إدارة وتصميم قواعد بيانات ضخمة وموزعة تضمن دقة البيانات وسرعة استدعائها تحت أي ظرف."
      }
      ,
      {
        title: "Imprint Startup Profile 014",
        price: "13 US Dollar ",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782930839/d1_vqz0sb.mp4",
        link: "https://imprint307-a11y.github.io/d1/",
        description: "تحويل البيانات الضخمة إلى رؤى استراتيجية ملموسة، وبناء نماذج تعلم آلي ($Machine Learning$) متقدمة تتوقع الاتجاهات المستقبلية لتمنح مؤسستك تفوقاً تنافسياً مبنياً على الأرقام."
      },
      {
        title: "Imprint Startup Profile 015",
        price: "17 US Dollar ",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782931334/Screen_Recording_2026-07-01_214038_g4t6ud.mp4",
        link: "https://imprint307-a11y.github.io/d2/",
        description: "نصنع من الأرقام الصامتة حلولاً ذكية؛ متخصص في تحليل البيانات المعقدة وتطوير خوارزميات ذكاء اصطناعي تحل مشكلات العمل الحقيقية وتدعم اتخاذ القرار بدقة متناهية."
      },
      {
        title: "Imprint Startup Profile 016",
        price: "18 US Dollar ",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782931795/Screen_Recording_2026-07-01_214911_lumn1m.mp4",
        link: "https://imprint307-a11y.github.io/d3/",
        description: "من تنظيف البيانات واستكشافها إلى نشر النماذج الذكية ($Deployment$)؛ أصمم حلولاً برمجية ذكية تعتمد على الهندسة الدقيقة للبيانات لتحويل التحديات المعقدة إلى فرص نمو مستدامة."
      }
    ]
  }
  ,
  {
    id: "engineering",
    title: "للمهندسين والمجالات التقنية الهندسية",
    label: "Engineering Imprints",
    description: "نماذج تعرض المشاريع، الخبرات، المهارات التقنية، والإنجازات بطريقة عملية وواضحة.",
    products: [
      {
        title: "Imprint Engineer Portfolio 01",
        price: "20 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782692684/eng1_dhteao.mp4",
        link: "https://imprint307-a11y.github.io/eng1/",
        description: "يعرض المشاريع الهندسية، البرامج المستخدمة، الخبرات العملية، وروابط الأعمال."
      },
      {
        title: "Imprint Project Case Study 02",
        price: "18 US Dollar",
        video: "https://res.cloudinary.com/dlbi7sm7p/video/upload/v1782693175/eng2_lwnmns.mp4",
        link: "https://imprint307-a11y.github.io/eng2/",
        description: "مناسب لمن يريد عرض مشروعه على شكل مشكلة، حل، أدوات، ونتائج نهائية."
      }
    ]
  }
];

/* 
  ضع رقم واتساب هنا بدون + لو بدك زر "تحضير المنتج" يفتح واتساب مباشرة.
  مثال للأردن:
  const whatsappNumber = "9627XXXXXXXX";

  لو تركته فارغ، سيظهر تنبيه جميل داخل الموقع فقط.
*/
const whatsappNumber = "962775162280";

/* =========================
   عناصر الصفحات
========================= */

const pages = {
  gate: document.getElementById("gatePage"),
  intro: document.getElementById("introPage"),
  products: document.getElementById("productsPage")
};

const goProductsBtn = document.getElementById("goProductsBtn");
const backIntroBtn = document.getElementById("backIntroBtn");
const productsGrid = document.getElementById("productsGrid");
const categoryNav = document.getElementById("categoryNav");
const toast = document.getElementById("toast");

/* =========================
   التنقل بين الصفحات
========================= */

function showPage(pageName) {
  Object.entries(pages).forEach(([name, page]) => {
    const isActive = name === pageName;

    page.classList.toggle("active", isActive);
    page.setAttribute("aria-hidden", String(!isActive));
  });

  if (pageName === "products") {
    setTimeout(() => {
      pages.products.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);
  }
}

pages.gate.addEventListener("click", () => {
  showPage("intro");
});

pages.gate.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showPage("intro");
  }
});

goProductsBtn.addEventListener("click", () => {
  showPage("products");
});

backIntroBtn.addEventListener("click", () => {
  showPage("intro");
});

/* =========================
   إنشاء مربعات المنتجات
========================= */

function renderCategoryNav() {
  categoryNav.innerHTML = "";

  productCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-chip";
    button.textContent = category.title;

    button.addEventListener("click", () => {
      const section = document.getElementById(`category-${category.id}`);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    categoryNav.appendChild(button);
  });
}

function renderProducts() {
  productsGrid.innerHTML = "";
  let animationIndex = 0;

  productCategories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "product-category";
    section.id = `category-${category.id}`;

    const cardsHtml = category.products
      .map((product) => {
        const currentIndex = animationIndex;
        animationIndex += 1;

        return `
          <article class="product-card" style="transition-delay: ${currentIndex * 70}ms">
            <div class="video-frame">
              <video controls muted playsinline preload="metadata">
                <source src="${product.video}" type="video/mp4">
                المتصفح لديك لا يدعم تشغيل الفيديو.
              </video>
            </div>

            <div class="product-body">
              <h3 class="product-title">${product.title}</h3>

              <p class="product-desc">
                ${product.description}
              </p>

              <div class="product-meta">
                <div>
                  <span class="price-label">السعر</span>
                  <strong class="product-price">${product.price}</strong>
                </div>

                <span class="product-badge">
                  متاح الآن
                </span>
              </div>

              <div class="product-actions">
  <a
    class="preview-btn"
    href="${product.link}"
    target="_blank"
    rel="noopener noreferrer"
  >
    مشاهدة الصفحة
  </a>

  <button
          class="prepare-btn"
            type="button"
            data-category-id="${category.id}"
           data-product-title="${product.title}"
           >
           انقر لتحضير المنتج       
  </button>
            </div>
            </div>
          </article>
        `;
      })
      .join("");

    section.innerHTML = `
      <header class="category-header">
        <div>
          <p class="category-kicker">${category.label}</p>
          <h2 class="category-title">${category.title}</h2>
          <p class="category-desc">${category.description}</p>
        </div>

        <span class="category-count">${category.products.length} نماذج</span>
      </header>

      <div class="category-grid">
        ${cardsHtml}
      </div>
    `;

    productsGrid.appendChild(section);
  });

  activateProductButtons();
  revealCardsSmoothly();
}

function findProduct(categoryId, productTitle) {
  const category = productCategories.find((item) => item.id === categoryId);

  if (!category) return null;

  return category.products.find((product) => product.title === productTitle) || null;
}

function activateProductButtons() {
  const prepareButtons = document.querySelectorAll(".prepare-btn");

  prepareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedProduct = findProduct(
        button.dataset.categoryId,
        button.dataset.productTitle
      );

      if (selectedProduct) {
        prepareProduct(selectedProduct, button);
      }
    });
  });
}

/* =========================
   تحضير المنتج
========================= */

function prepareProduct(product, button) {
  button.disabled = true;
  button.textContent = "جاري التحضير...";

  setTimeout(() => {
    button.disabled = false;
    button.textContent = "انقر لتحضير المنتج";

    if (whatsappNumber.trim() !== "") {
      const message = `مرحبًا، أريد تحضير هذا المنتج: ${product.title} - السعر: ${product.price}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
    } else {
      showToast(`تم اختيار ${product.title}. يمكنك لاحقًا ربط الزر بواتساب أو صفحة طلب.`);
    }
  }, 650);
}

/* =========================
   رسالة صغيرة داخل الموقع
========================= */

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* =========================
   ظهور البطاقات بسلاسة
========================= */

function revealCardsSmoothly() {
  const cards = document.querySelectorAll(".product-card");

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  cards.forEach((card) => observer.observe(card));
}

/* =========================
   حركة خفيفة مع الماوس
========================= */

window.addEventListener(
  "pointermove",
  (event) => {
    document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
  },
  { passive: true }
);

/* =========================
   فحص الشعار
========================= */

brandLogo.addEventListener("error", () => {
  brandCorner.classList.add("logo-missing");
});

/* =========================
   تشغيل أولي
========================= */

renderCategoryNav();
renderProducts();
