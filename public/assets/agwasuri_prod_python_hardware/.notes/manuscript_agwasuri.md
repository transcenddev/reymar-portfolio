# AGWASURI

> An IoT-Driven Platform for Monitoring Water Quality with Predictive Analytics Using Decision Tree Algorithm

Agwasuri is an open-source, solar-powered IoT hardware and web-based monitoring platform designed for real-time aquaculture management. Built specifically for fishpond operators in San Juan I, Ternate, Cavite, in collaboration with the Municipal Agriculture Office (MAO), it continuously captures water temperature, pH, salinity, and dissolved oxygen (DO) to predict optimal fish species selection and mitigate fish kill events.

---

## Key Features

- Autonomous Solar Power: Off-grid operational resilience powered by an integrated solar panel and a 20,000 mAh Li-Po power bank.
- Multi-Sensor Telemetry: Automated sampling of water temperature, pH, salinity, and dissolved oxygen every 2 seconds.
- Dual Storage Strategy: Real-time cloud synchronization via authenticated REST API with automatic local MicroSD fallback logging during network dropouts.
- Machine Learning Recommendations: Integrated Decision Tree classification model matching SEAFDEC optimal parameters for Milkfish (Bangus), Grouper (Lapu-lapu), Tilapia, Prawn (Sugpo), and Mudcrab.
- Web Dashboard and Local Display: Responsive monitoring interface built with Laravel and Tailwind CSS, accompanied by an on-site 20x4 character LCD display.

---

## System Architecture

```text
+--------------------------------------------------------------+
|                    Water Quality Probes                      |
|  - Gravity Electrical Conductivity (Salinity)                |
|  - pH-4502c Analog Sensor                                    |
|  - Gravity Galvanic Dissolved Oxygen                         |
|  - DS18B20 Digital Temperature Probe                         |
+------------------------------+-------------------------------+
                               |
                               v
+--------------------------------------------------------------+
|                 ESP32-WROOM-32 Microcontroller               |
|  - Firmware: MicroPython via Thonny                          |
|  - DS1302 Real-Time Clock Module (RTC)                       |
|  - 20x4 Character LCD Display (HD44780)                      |
|  - Power: Solar Panel + 20,000 mAh Power Bank (18W)          |
+---------------+------------------------------+---------------+
                |                              |
      (No Wi-Fi Connection)          (Wi-Fi Connected)
                |                              |
                v                              v
+---------------+---------------+  +-----------+---------------+
|     32GB MicroSD Card Module  |  |    Laravel REST Ingestion |
|  - SPI Interface              |  |    (Bearer Token Auth)    |
|  - Local offline CSV logging  |  +-----------+---------------+
+-------------------------------+              |
                                               v
                                   +-----------+---------------+
                                   |      MySQL Database       |
                                   +-----------+---------------+
                                               |
                                               v
                                   +-----------+---------------+
                                   |  Decision Tree Analytics  |
                                   |  - Benchmark Accuracy:    |
                                   |    93.5%                  |
                                   |  - Prediction Latency:    |
                                   |    0.001s                 |
                                   +-----------+---------------+
                                               |
                                               v
                                   +-----------+---------------+
                                   | Web Dashboard & Alerts    |
                                   |  - Real-time live feed    |
                                   |  - MAO and Farmer portals |
                                   +---------------------------+
```

Hardware SpecificationsComponentModel / SpecPurposeMicrocontrollerESP32-WROOM-32 (Dual-core, 2.4 GHz Wi-Fi)Sensor acquisition, edge logic, transmissionpH SensorpH-4502c Analog Probe (Accuracy: +/-0.1 pH)Acidity and alkalinity monitoringSalinity SensorDFRobot Analog EC Kit K=1 (0 to 20 mS/cm)Electrical conductivity and salt concentrationDissolved OxygenDFRobot Galvanic DO Meter (0 to 20 mg/L)Dissolved oxygen measurementTemperatureDS18B20 Waterproof Probe (Accuracy: +/-0.5 deg C)Water temperature monitoringPower Storage20,000 mAh Redmi Fast Charge Power BankBackup battery storageSolar Panel12V Photovoltaic PanelOff-grid renewable power generationTimekeepingDS1302 RTC ModuleOffline timestampingLocal StorageMicroSD Card Module (32GB MicroSDHC, SPI)Offline failover data loggingOn-site Display20x4 LCD Display White on Blue (HD44780)Local real-time sensor readoutFlotation / CaseFiberglass composite box + dual-layer styrofoamBuoyant, weatherproof deployment platformSoftware StackBackend: Laravel 10 / PHP, MySQLFrontend: Tailwind CSS, Livewire, JavaScriptMicrocontroller Firmware: MicroPythonMachine Learning: Python (Scikit-Learn Decision Tree Classifier)Prototyping and Wireframing: Figma, Fritzing, BlenderWater Quality Guidelines ReferenceWater status classifications are aligned with DENR Administrative Order No. 2016-08 and PHILMINAQ standards:ParameterGood (Optimal)Critical (Action Required)pH Level6.5 to 9.0Below 6.5 or Above 9.0Dissolved Oxygen5.0 mg/L and aboveBelow 5.0 mg/LTemperature26.0 to 32.0 deg CBelow 26.0 deg C or Above 32.0 deg CSalinity0.5 to 30.0 pptBelow 0.5 ppt (Freshwater) or Above 30.0 ppt (Marine)Installation and Setup1. Web Platform Setup (Laravel)PrerequisitesPHP >= 8.1ComposerMySQLNode.js and NPM

Steps

# Clone the repository

git clone [https://github.com/transcenddev/agwasuri.git](https://github.com/transcenddev/agwasuri.git)
cd agwasuri

# Install PHP dependencies

composer install

# Install JavaScript dependencies

npm install
npm run build

# Configure environment

cp .env.example .env
php artisan key:generate

# Set up your database credentials in .env, then run migrations:

php artisan migrate --seed

# Start the local development server

php artisan serve

2.  ESP32 Firmware Setup (MicroPython)
    Prerequisites

        Thonny IDE

        MicroPython firmware flashed to ESP32

Configuration

    Open the /firmware directory in Thonny IDE.

    Edit config.json with your network credentials and API key:

    {

"ssid": "YOUR_WIFI_SSID",
"password": "YOUR_WIFI_PASSWORD",
"api_url": "[https://your-domain.com/api/store-water-quality-data](https://your-domain.com/api/store-water-quality-data)",
"api_key": "YOUR_BEARER_TOKEN",
"user_id": 1
}

Upload data_controller.py, sensor drivers, and config.json to the ESP32 device.

    Restart the microcontroller to begin sampling.

Evaluation Results

Agwasuri was evaluated by 10 domain experts (IT experts, marine scientists, Municipal Agriculture Office officers, and local fishpond operators):

    Software Evaluation (ISO/IEC 25010): Overall Weighted Mean of 4.84 / 5.00 (Excellent)

    Hardware Usability (System Usability Scale): Overall Weighted Mean of 4.85 / 5.00 (Excellent)

    Recommendation Model Accuracy: 93.5% classification accuracy on 5,000 optimal aquaculture records

Authors

    Jazrel Dennis P. Mendoza

    Reymar V. Mirante

    John Mark A. Pachico

Department of Information Technology, Cavite State University - Naic Campus (BS Computer Science, 2026).
