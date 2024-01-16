/* eslint-disable react/no-unescaped-entities */
"use client";

import "./App.css";
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Pin,
	InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

function App() {
	const position = { lat: 53.54, lng: 10 };
	const [open, setOpen] = useState(false);

	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<div style={{ heigth: "100vh" }}>
				<Map
					zoom={9}
					center={position}
					mapId={import.meta.env.VITE_PUBLIC_MAP_ID}
				>
					<AdvancedMarker position={position} onClick={() => setOpen(true)}>
						<Pin
							background={"tomato"}
							borderColor={"blue"}
							glyphColor={"purple"}
						></Pin>
					</AdvancedMarker>
					{open && (
						<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
							<p>I'm in Hamburg</p>
						</InfoWindow>
					)}
				</Map>
			</div>
		</APIProvider>
	);
}

export default App;
