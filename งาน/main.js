// ข้อมูล 6 ภาค ภาคละ 1 จังหวัด พร้อมรูปภาพอาหารและรายละเอียด
const thailandData = [
    {
        id: "north",
        region: "เหนือ",
        province: "เชียงใหม่",
        tagline: "สัมผัสลมหนาว ยอดดอยสูงลิ่ว ศิลปวัฒนธรรมล้านนา",
        highlightSpot: "ดอยอินทนนท์ & วัดพระธาตุดอยสุเทพ",
        image: "https://www.maehongsongreentravel.com/images/editor/Chiang%20Mai/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88.jpg",
        foods: [
            { 
                name: "ข้าวซอยไก่", 
                desc: "บะหมี่ในน้ำแกงกะหรี่เข้มข้น หอมเครื่องเทศ เสิร์ฟพร้อมผักดองและหอมแดง",
                image: "https://fit-d.com/uploads/food/6639c5fd176cbf3960b9a9f3ec7602b6.jpg" 
            },  
            {       
                name: "ไส้อั่ว & น้ำพริกหนุ่ม", 
                desc: "ไส้กรอกหมูสมุนไพรย่างเตาถ่าน ทานคู่กับน้ำพริกหนุ่มรสเด็ดและแคบหมูกรอบๆ",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsinCevrR2jfNpaMKliXrlzEDqo9zsDwszdLgxOzuIytLcUp3lV87HjYBL&s=10" 
            }
        ],  
        bestTime: "พฤศจิกายน - กุมภาพันธ์",
        desc: "เชียงใหม่ เมืองหลวงแห่งล้านนา โดดเด่นด้วยภูเขาสลับซับซ้อน อากาศหนาวเย็นบนยอดดอย ผสานวิถีชีวิตดั้งเดิมและอาหารเหนือรสชาติดั้งเดิม"
    },
    {
        id: "isan",
        region: "ตะวันออกเฉียงเหนือ",
        province: "นครราชสีมา",  
        tagline: "ประตูสู่อีสาน ผืนป่ามรดกโลก ปราสาทหินโบราณ",
        highlightSpot: "อุทยานแห่งชาติเขาใหญ่ & ปราสาทหินพิมาย",
        image: "https://cms.dmpcdn.com/travel/2021/10/21/a77509c0-323a-11ec-b32e-1ff051226dd6_webp_original.jpg",
        foods: [
            { 
                name: "ผัดหมี่โคราช",  
                desc: "เส้นหมี่เหนียวนุ่มผัดด้วยซอสสูตรโบราณรสชาติกลมกล่อมเผ็ดนิดๆ",
                image: "https://s359.kapook.com/pagebuilder/e889e95b-5d6e-4b26-937b-6419c0897189.jpg    " 
            },  
            { 
                name: "ส้มตำแซ่บอีสาน", 
                desc: "ส้มตำไทย-ปลาร้ารสจัดจ้าน เสิร์ฟพร้อมไก่ย่างเนื้อนุ่ม",
                image: "https://s.isanook.com/wo/0/ud/37/188581/food.jpg?ip/crop/w670h402/q80/jpg" 
            }
        ],
        bestTime: "ตุลาคม - มกราคม",
        desc: "นครราชสีมา หรือ โคราช เมืองใหญ่แห่งประตูสู่อีสาน สมบูรณ์ด้วยธรรมชาติผืนป่ามรดกโลกเขาใหญ่ และเมนูอาหารรสแซ่บที่เป็นเอกลักษณ์"
    },
    {
        id: "central",
        region: "กลาง",
        province: "กาญจนบุรี",
        tagline: "ย้อนรอยประวัติศาสตร์ นอนแพชิลริมแม่น้ำแคว",
        highlightSpot: "สะพานข้ามแม่น้ำแคว & น้ำตกเอราวัณ",
        image: "https://www.thefloathouseriverkwai.com/wp-content/uploads/2024/09/9.1-%E0%B8%A3%E0%B8%A7%E0%B8%A1-7-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%93%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5.webp",
        foods: [
            { 
                name: "แกงป่าเมืองกาญจน์", 
                desc: "แกงเผ็ดรสจัดจ้านไม่ใส่กะทิ อุดมไปด้วยสมุนไพรป่าและพริกแกงสูตรเข้มข้น",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_oCZNfNRzILoWHHVKcwh7fBosbIHbGccPAExocMaNu6t_x2GZPMkglo&s=10" 
            },
            {   
                name: "ปลาคังลวกจิ้ม", 
                desc: "เนื้อปลาคังสดๆ จากเขื่อน ลวกจิ้มกับน้ำจิ้มซีฟู้ดรสแซ่บ",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSh4Ge4HeUbck_gsSODgnztfrG59tWXYNdvuTA1Ed3pO3NBFZmOXE-M_8&s=10" 
            }
        ],
        bestTime: "พฤศจิกายน - กุมภาพันธ์",
        desc: "กาญจนบุรี ดินแดนแห่งขุนเขาและสายน้ำ เต็มไปด้วยเรื่องราวประวัติศาสตร์ พร้อมร้านอาหารริมน้ำที่เสิร์ฟเมนูปลาแม่น้ำสดๆ"
    },
    {
        id: "east",
        region: "ตะวันออก",
        province: "ชลบุรี",
        tagline: "สีสันทะเลอ่าวไทย เกาะสวยใกล้กรุง สนุกได้ทุกวัย",
        highlightSpot: "เกาะล้าน, หาดบางแสน & พัทยา",
        image: "https://cmpccoop.com/wp-content/uploads/2019/01/9203-e1570151785744.jpg ",
        foods: [
            { 
                name: "อาหารทะเลเผา & สดๆ", 
                desc: "กุ้ง หอย ปู ปลา สดจากทะเลเสิร์ฟพร้อมน้ำจิ้มรสเด็ด",
                image: "https://www.ryoiireview.com/upload/article/202412/1733301825_156005c5baf40ff51a327f1c34f2975b.jpg" 
            },
            { 
                name: "ข้าวต้มปลาทะเล",   
                desc: "ข้าวต้มร้อนๆ ใส่เนื้อปลาเก๋าหรือปะการัง สดหวานหอมขิงซอย",
                image: "https://www.thammculture.com/wp-content/uploads/2023/03/Untitled-402.jpg" 
            }
        ],
        bestTime: "พฤศจิกายน - เมษายน",
        desc: "ชลบุรี จุดหมายปลายทางยอดนิยมริมชายฝั่งทะเลอ่าวไทย ครบครันด้วยชายหาดเกาะล้านใสสะอาด และแหล่งอาหารทะเลสดใหม่ชื่อดัง"
    },
    {
        id: "west",
        region: "ตะวันตก",
        province: "ประจวบคีรีขันธ์",
        tagline: "มนต์เสน่ห์เมืองตากอากาศ ชายหาดยาวสุดสายตา",
        highlightSpot: "หัวหิน & ถ้ำพระยานคร",
        image: "https://cms.dmpcdn.com/travel/2021/05/19/7aa20350-b84e-11eb-a753-ed580dade28e_original.jpg ",
        foods: [
            { 
                name: "เค้กมะพร้าวอ่อนหัวหิน", 
                desc: "เบเกอรี่ชื่อดัง เนื้อมะพร้าวอ่อนแน่นหอมกะทิสดละมุนลิ้น",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr_B9cZcs2-YNDfFu5mPudoTu7heYOcjucm1LzS47QldQjNvY4__U6xWt&s=10" 
            },
            { 
                name: "ปลาทูต้มยำมะนาวสด", 
                desc: "ปลาทูเนื้อแน่นต้มยำรสชาติแซ่บจี๊ดจ๊าดถึงใจ",
                image: "https://www.hongthongrice.com/life/wp-content/uploads/2016/05/pa-too.jpg" 
            }
        ],
        bestTime: "ธันวาคม - พฤษภาคม",
        desc: "ประจวบคีรีขันธ์ เมืองตากอากาศชายทะเลสุดคลาสสิก ชมชายหาดหัวหิน และลิ้มรสอาหารทะเลสดๆ พร้อมคาเฟ่เบเกอรี่มะพร้าวอ่อนขึ้นชื่อ"
    },
    {
        id: "south",
        region: "ใต้",
        province: "ภูเก็ต",
        tagline: "ไข่มุกแห่งอันดามัน เมืองเก่าชิโนยูโรเปียน หาดทรายระดับโลก",
        highlightSpot: "แหลมพรหมเทพ, ย่านเมืองเก่าภูเก็ต & เกาะราชา",
        image: "https://www.checkinchill.com/storage/content/f8000a19-60de-40ed-a246-4b5cb760c8b6.webp  ",
        foods: [
            { 
                name: "หมูสามชั้น  ", 
                desc: "หมูสามชั้นเคี่ยวซีอิ๊วดำและเครื่องพริกไทยสมุนไพรจนเปื่อยนุ่มละลายในปาก",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9FYffAui5oEPaow6xwA6NhNDnWt1tIVUAuTOV6T5oVIo2BrSglaTbUbn&s=10   " 
            },
            { 
                name: "หมี่ฮกเกี้ยน", 
                desc: "บะหมี่เหลืองผัดซอสเข้มข้นใส่กุ้ง ปลาหมึก และไข่ออนเซ็น",
                image: "https://api2.krua.co/wp-content/uploads/2023/04/ArticlePic_1670x1095_Artboard-1-01-3.jpg" 
            }
        ],
        bestTime: "พฤศจิกายน - เมษายน",
        desc: "ภูเก็ต เกาะสวรรค์ระดับโลกแห่งทะเลอันดามัน ตระการตาด้วยวิวธรรมชาติ และวัฒนธรรมอาหารเพอรานากันอันเลื่องชื่อ"
    }
];

let currentRegion = 'ทั้งหมด';

// Render Cards Function
function renderCards(data) {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';

    if (data.length === 0) {
        cardsGrid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <p class="text-lg">❌ ไม่พบข้อมูลสถานที่หรืออาหารที่ค้นหา</p>
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const foodNames = item.foods.map(f => f.name).join(', ');

        cardsGrid.innerHTML += `
            <article class="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group">
                <div>
                    <div class="relative overflow-hidden h-52">
                        <img src="${item.image}" alt="${item.province}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        <span class="absolute top-3 left-3 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                            ภาค${item.region}
                        </span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-2xl font-bold text-slate-100 mb-1">จ.${item.province}</h3>
                        <p class="text-xs text-amber-300 font-medium mb-3">✨ ${item.tagline}</p>
                        <p class="text-slate-300 text-sm line-clamp-2 leading-relaxed mb-4">${item.desc}</p>
                        
                        <div class="bg-slate-900/70 p-3.5 rounded-xl border border-slate-700/40 text-xs space-y-2">
                            <p class="text-slate-300"><strong class="text-amber-400">📍 ไฮไลท์:</strong> ${item.highlightSpot}</p>
                            <p class="text-slate-200"><strong class="text-rose-400">🍲 อาหารเด็ด:</strong> ${foodNames}</p>
                        </div>
                    </div>
                </div>
                <div class="p-5 pt-0">
                    <button onclick="openModal('${item.id}')" class="w-full bg-slate-700 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-semibold py-2.5 rounded-xl transition text-sm">
                        ดูรายละเอียด & รูปอาหารเด็ด
                    </button>
                </div>
            </article>
        `;
    });
}

// Filter Function
function filterByRegion(region) {
    currentRegion = region;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active-btn');
        if (btn.textContent.includes(region) || (region === 'ทั้งหมด' && btn.textContent.includes('ทั้งหมด'))) {
            btn.classList.add('active-btn');
        }
    });

    applyFilters();
}

// Search & Filter Logic
function applyFilters() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = thailandData.filter(item => {
        const matchesRegion = (currentRegion === 'ทั้งหมด') || (item.region === currentRegion);
        const foodMatch = item.foods.some(f => f.name.toLowerCase().includes(searchText) || f.desc.toLowerCase().includes(searchText));
        const matchesSearch = item.province.toLowerCase().includes(searchText) ||
                              item.region.toLowerCase().includes(searchText) ||
                              item.highlightSpot.toLowerCase().includes(searchText) ||
                              foodMatch;
                              
        return matchesRegion && matchesSearch;
    });

    renderCards(filtered);
}

// AI Travel Assistant Function
function askAIGuide() {
    const style = document.getElementById('aiStyleSelect').value;
    const aiBox = document.getElementById('aiResponse');
    aiBox.classList.remove('hidden');

    const responses = {
        nature: "🌿 **AI แนะนำ:** ลองไป **จ.เชียงใหม่ (ภาคเหนือ)** สัมผัสยอดดอยแล้วชิม *ข้าวซอยไก่* รสเด็ด หรือนอนแพริมน้ำที่ **จ.กาญจนบุรี (ภาคกลาง)** ซด *แกงป่าเมืองกาญจน์* รสจัดจ้าน!",
        culture: " **AI แนะนำ:** สัมผัสอารยธรรมที่ **จ.นครราชสีมา (ภาคอีสาน)** ชมปราสาทหินพิมาย พร้อมลิ้มรส *ผัดหมี่โคราช* และส้มตำรสแซ่บสะใจ",
        food: "🍲 **AI แนะนำสายกินตัวยง:** พลาดไม่ได้กับ **จ.ภูเก็ต (ภาคใต้)** จัดเต็มเมนู *หมูฮ้อง* และ *หมี่ฮกเกี้ยน* หรือจะแวะ **จ.เชียงใหม่** ซด *ข้าวซอย* ต้นตำรับรับรองฟินแน่นอน!",
        sea: "🏖️ **AI แนะนำสายทะเล:** ล่องใต้เที่ยว **จ.ภูเก็ต** ชมพระอาทิตย์ตกแหลมพรหมเทพ หรือเที่ยวทะเลตะวันออกที่ **จ.ชลบุรี** กินอาหารทะเลสดๆ พร้อมข้าวต้มปลาริมหาด"
    };

    aiBox.innerHTML = responses[style] || "กรุณาเลือกสไตล์การท่องเที่ยว";
}

// Modal Functions with Food Pictures
function openModal(id) {
    const item = thailandData.find(d => d.id === id);
    if (!item) return;

    let foodHtml = '';
    item.foods.forEach(f => {
        foodHtml += `
            <div class="bg-slate-900/80 rounded-xl overflow-hidden border border-slate-700/50 flex flex-col">
                <img src="${f.image}" alt="${f.name}" class="w-full h-36 object-cover">
                <div class="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-amber-300 text-sm mb-1">🔸 ${f.name}</h4>
                        <p class="text-xs text-slate-300 leading-relaxed">${f.desc}</p>
                    </div>
                </div>
            </div>
        `;
    });

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <img src="${item.image}" alt="${item.province}" class="w-full h-64 object-cover rounded-xl mb-4">
        <span class="bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full">ภาค${item.region}</span>
        <h2 class="text-3xl font-bold text-slate-100 mt-2 mb-1">จ.${item.province}</h2>
        <p class="text-amber-300 font-semibold mb-3">${item.tagline}</p>
        
        <p class="text-slate-300 text-sm leading-relaxed mb-4">${item.desc}</p>
        
        <div class="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-700/60 text-sm mb-6">
            <p><strong class="text-amber-400">📍 จุดท่องเที่ยวไฮไลท์:</strong> ${item.highlightSpot}</p>
            <p><strong class="text-amber-400">🗓️ ช่วงเวลาที่น่าเที่ยวที่สุด:</strong> ${item.bestTime}</p>
        </div>

        <h3 class="text-lg font-bold text-rose-400 mb-3">🍲 เมนูอาหารเด็ดประจำจังหวัด (พร้อมภาพประกอบ)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${foodHtml}
        </div>
    `;

    document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

// Initialize Event Listeners
document.getElementById('searchInput').addEventListener('input', applyFilters);

// Initial Render
renderCards(thailandData);